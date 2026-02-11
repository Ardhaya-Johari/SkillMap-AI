import { Router } from 'express';
import { getSkills, addSkill, updateSkill, deleteSkill } from '../controllers/skillController';
import { authMiddleware } from '../middleware/auth';

const router = Router();
router.use(authMiddleware);

router.get('/', getSkills);
router.post('/', addSkill);
router.put('/:id', updateSkill);
router.delete('/:id', deleteSkill);

export default router;
