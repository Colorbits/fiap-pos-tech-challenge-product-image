import express from 'express';
import productImageRoutes from './routes/productImageRoutes';

const app = express();

app.use(express.json());
app.use(productImageRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});