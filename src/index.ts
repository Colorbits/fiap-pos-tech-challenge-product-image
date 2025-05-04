import express, { NextFunction, Request, Response } from 'express';
import { config } from "dotenv";
import routes from './routes';

config();
const app = express();
app.use(express.json());
app.use(routes);

app.use((error: any, _req: Request, res: Response, _next: NextFunction) => {
  res.status(501).json({
    status: false,
    message: "An error occurred",
    error,
  })
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});