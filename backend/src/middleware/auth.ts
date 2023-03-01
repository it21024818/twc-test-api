import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

interface DecodedToken {
  email: string;
  id: string;
}

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Express {
    interface Request {
      user?: DecodedToken;
    }
  }
}

const auth = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
      return res.status(401).json({ message: 'No authentication token, authorization denied.' });
    }

    const decodedToken = jwt.verify(token, process.env.JWT_SECRET as string) as DecodedToken;

    req.user = decodedToken;
    next();
  } catch (error) {
    res.status(500).json({ message: 'Authentication failed' });
    console.error(error);
  }
};

export default auth;
