import { Router } from 'express';
import { createProductImage, getProductImage } from '../controllers/productImageController';

const router = Router();

router.post('/:productId', createProductImage);
router.get('/:productImageId', getProductImage);

export default router;