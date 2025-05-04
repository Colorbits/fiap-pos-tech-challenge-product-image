import { Router } from 'express';
import { createProductImage, getProductImage } from '../controllers/productImageController';
import { createProductImageSchema } from "../schemas/productImageSchema";
import { validateSchema } from '../middlewares/validation.middleware';

const router = Router();

router.post('/', validateSchema(createProductImageSchema), createProductImage);
router.get('/:product-id', getProductImage);

export default router;