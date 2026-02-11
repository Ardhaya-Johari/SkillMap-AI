import { Router } from 'express';
import { setCareerGoal } from '../controllers/careerController';
import { authMiddleware } from '../middleware/auth';

const router = Router();
router.use(authMiddleware);
router.post('/', setCareerGoal);

export default router;
