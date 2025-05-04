import { Router } from 'express';
import productImageRoutes from './productImageRoutes'

const indexRoute = Router();

indexRoute.get("", async (req, res) => {
  res.json({ message: "FIAP Post Tech Challenge: product images" });
});

indexRoute.use("/product-images", productImageRoutes);

export default indexRoute;
