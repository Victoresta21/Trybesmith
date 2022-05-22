import express from 'express';
import productRoutes from './routers/porductRoutes';
import userRoutes from './routers/userRoutes';

const app = express();

app.use(express.json());
app.use('/products', productRoutes);
app.use('/users', userRoutes);

export default app;
