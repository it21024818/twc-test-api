import { Schema, model, Document } from 'mongoose';

export interface User extends Document {
  email: string;
  password: string;
}

const userSchema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

export default model<User>('User', userSchema);
