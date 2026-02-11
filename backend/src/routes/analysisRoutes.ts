import { Router } from 'express';
import { getAnalysis } from '../controllers/analysisController';
import { authMiddleware } from '../middleware/auth';

const router = Router();
router.use(authMiddleware);
router.get('/', getAnalysis);

export default router;
