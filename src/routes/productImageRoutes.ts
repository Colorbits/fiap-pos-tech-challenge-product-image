import { Router } from 'express';
import { createProductImage, getProductImageDetails, getImage } from '../controllers/productImageController';

const router = Router();

router.get('/:id', getImage);
router.post('/:productId', createProductImage);
router.get('/images/:productId', getProductImageDetails);

export default router;