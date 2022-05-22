import express from 'express';
import productRoutes from './routers/porductRoutes';

const app = express();

app.use(express.json());
app.use('/products', productRoutes);

export default app;
