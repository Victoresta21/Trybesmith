import { Router } from 'express';
import ProductController from '../controllers/productController';

const productController = new ProductController();

const productRoutes = Router();
productRoutes.get('/', productController.getAll);

export default productRoutes;
