import express from 'express';
import * as authController from '../controllers/auth';
// import authMiddleware from '../middleware/auth';

const router = express.Router();

// Public routes
router.post('/register', authController.registerUser);
router.post('/login', authController.loginUser);

// Private routes
// router.get('/me', authMiddleware, authController.getCurrentUser);

export default router;
