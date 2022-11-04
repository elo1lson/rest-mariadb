import { Router } from 'express';
import UserController from '../controllers/User'
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.post('/', UserController.store);
router.get('/', loginRequired, UserController.index);
router.get('/:id', UserController.show);
router.put('/:id', UserController.update);
router.delete('/:id', UserController.delete);

export default router;
