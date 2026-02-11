import { Request, Response } from 'express';
import { Skill } from '../models/Skill';
import { AuthRequest } from '../middleware/auth';

export const getSkills = async (req: AuthRequest, res: Response) => {
  const userId = req.user.id;
  const skills = await Skill.findAll({ where: { userId } });
  res.json(skills);
};

export const addSkill = async (req: AuthRequest, res: Response) => {
  const userId = req.user.id;
  const { name, level } = req.body;
  const skill = await Skill.create({ name, level, userId });
  res.json(skill);
};

export const updateSkill = async (req: AuthRequest, res: Response) => {
  const userId = req.user.id;
  const { id } = req.params;
  const { name, level } = req.body;
  await Skill.update({ name, level }, { where: { id, userId } });
  res.json({ message: 'Skill updated' });
};

export const deleteSkill = async (req: AuthRequest, res: Response) => {
  const userId = req.user.id;
  const { id } = req.params;
  await Skill.destroy({ where: { id, userId } });
  res.json({ message: 'Skill deleted' });
};
