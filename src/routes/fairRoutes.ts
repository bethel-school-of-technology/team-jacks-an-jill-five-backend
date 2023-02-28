import { Router } from 'express';

const router = Router();

import { 
    getAllFairs, 
    createFair, 
    getFair, 
    updateFair, 
    deleteFair 
} from '../controllers/fairController';


router.get('/', getAllFairs);
router.post('/', createFair);
router.get('/:fairId', getFair);
router.put('/:fairId', updateFair);
router.delete('/:fairId', deleteFair);

export default router;