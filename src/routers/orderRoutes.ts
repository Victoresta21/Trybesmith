import { Router } from 'express';
import OrderController from '../controllers/orderController';

const orderController = new OrderController();

const orderRoutes = Router();
orderRoutes.get('/', orderController.getAll);

export default orderRoutes;
