import { Request, Response } from 'express';
import { CareerGoal } from '../models/CareerGoal';
import { AuthRequest } from '../middleware/auth';

export const setCareerGoal = async (req: AuthRequest, res: Response) => {
  const userId = req.user.id;
  const { goal } = req.body;

  const existing = await CareerGoal.findOne({ where: { userId } });
  if (existing) {
    await CareerGoal.update({ goal }, { where: { userId } });
    return res.json({ message: 'Career goal updated' });
  }

  const newGoal = await CareerGoal.create({ goal, userId });
  res.json(newGoal);
};
