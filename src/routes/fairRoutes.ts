import { Router } from 'express';
import {
    getAllFairs,
    createFair,
    getFair,
    updateFair,
    deleteFair
} from '../controllers/fairController';

const router = Router();

router.get('/', getAllFairs);
router.post('/', createFair);
router.get('/:fairId', getFair);
router.put('/:fairId', updateFair);
router.delete('/:fairId', deleteFair);

export default router;