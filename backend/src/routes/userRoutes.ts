import { Router } from 'express';
import { registerUser, loginUser, updateUser } from '../controllers/userController';
import { authMiddleware } from '../middleware/auth';

const router = Router();

router.post('/', registerUser);
router.post('/login', loginUser);
router.put('/', authMiddleware, updateUser);

export default router;
