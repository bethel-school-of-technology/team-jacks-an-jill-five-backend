import { Router } from 'express';
import {
    createUser,
    loginUser,
    getCurrentUser,
    updateUser,
    getUserById
} from '../controllers/userController';

const router = Router();

router.post('/', createUser);
router.post('/login', loginUser);
router.get('/', getCurrentUser); 
router.get('/:userId', getUserById);
router.put('/:userId', updateUser)

export default router;