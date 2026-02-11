import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import { User } from '../models/User';
import { generateToken } from '../utils/jwt';

export const registerUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    const hashed = await bcrypt.hash(password, 10);
    const user = await User.create({ email, password: hashed });
    const token = generateToken({ id: user.id, email: user.email });
    res.json({ token });
  } catch (err) {
    res.status(400).json({ message: 'User already exists or invalid data' });
  }
};

export const loginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const user = await User.findOne({ where: { email } });
  if (!user) return res.status(400).json({ message: 'Invalid credentials' });

  const match = await bcrypt.compare(password, user.password);
  if (!match) return res.status(400).json({ message: 'Invalid credentials' });

  const token = generateToken({ id: user.id, email: user.email });
  res.json({ token });
};

export const updateUser = async (req: Request, res: Response) => {
  const userId = (req as any).user.id;
  const { name, age } = req.body;
  try {
    await User.update({ name, age }, { where: { id: userId } });
    res.json({ message: 'Profile updated' });
  } catch {
    res.status(400).json({ message: 'Failed to update' });
  }
};
