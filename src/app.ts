import express from 'express';
import productRoutes from './routers/porductRoutes';
import userRoutes from './routers/userRoutes';
import orderRoutes from './routers/orderRoutes';

const app = express();

app.use(express.json());
app.use('/products', productRoutes);
app.use('/users', userRoutes);
app.use('/orders', orderRoutes);

export default app;
