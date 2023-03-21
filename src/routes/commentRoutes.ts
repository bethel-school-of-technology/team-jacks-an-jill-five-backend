import { Router } from 'express';
import {
    getAllComments,
    createComment,
    getComment,
    updateComment,
    deleteComment
} from '../controllers/commentController';

const router = Router();

router.get('/', getAllComments);
router.post('/', createComment);
router.get('/:commentId', getComment);
router.put('/:commentId', updateComment);
router.delete('/:commentId', deleteComment);


export default router;