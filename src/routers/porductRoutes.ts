import { Router } from 'express';
import ProductController from '../controllers/productController';
import ProductMiddleware from '../middlewares/productMiddleware';

const productController = new ProductController();
const productMiddleware = new ProductMiddleware();

const productRoutes = Router();
productRoutes.get('/', productController.getAll);
productRoutes.post('/', productMiddleware.validationProduct, productController.create);

export default productRoutes;
