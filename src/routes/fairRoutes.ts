import { Router } from 'express';
import {
    getAllFairs,
    createFair,
    getFair,
    updateFair,
    deleteFair,
    searchFairs
} from '../controllers/fairController';

const router = Router();

router.get('/', getAllFairs);
router.post('/', createFair);
router.get('/search/:searchQuery', searchFairs);
router.get('/:fairId', getFair);
router.put('/:fairId', updateFair);
router.delete('/:fairId', deleteFair);


export default router;