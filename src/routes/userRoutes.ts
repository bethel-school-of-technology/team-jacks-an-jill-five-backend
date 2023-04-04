import { Router } from 'express';
import {
    createUser,
    loginUser,
    getCurrentUser
} from '../controllers/userController';

const router = Router();

router.post('/', createUser);
router.post('/login', loginUser);
router.get('/', getCurrentUser);

export default router;