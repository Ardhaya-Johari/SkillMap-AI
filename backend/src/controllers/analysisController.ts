import { Request, Response } from 'express';
import { Skill } from '../models/Skill';
import { CareerGoal } from '../models/CareerGoal';
import axios from 'axios';
import { AuthRequest } from '../middleware/auth';

export const getAnalysis = async (req: AuthRequest, res: Response) => {
  try {
    const userId = req.user.id;

    const skills = await Skill.findAll({ where: { userId } });
    const career = await CareerGoal.findOne({ where: { userId } });

    if (!career) {
      return res.status(400).json({ message: "Career goal not set" });
    }

    const aiRes = await axios.post('http://localhost:8000/analyze', {
      skills: skills.map(s => ({
        name: s.name,
        level: s.level
      })),
      careerGoal: career.goal
    });

    res.json(aiRes.data);

  } catch (error: any) {
    console.error("Analysis Error:", error.response?.data || error.message);
    res.status(500).json({ message: "Analysis failed" });
  }
};

