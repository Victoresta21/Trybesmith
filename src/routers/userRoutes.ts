import { Router } from 'express';
import UserController from '../controllers/userController';
import UserMiddleware from '../middlewares/userMiddleware';

const userController = new UserController();
const userMiddleware = new UserMiddleware();

const userRoutes = Router();
userRoutes.post('/', userMiddleware.validationUser, userController.create);

export default userRoutes;
