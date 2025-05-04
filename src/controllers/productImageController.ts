import { Request, Response } from 'express';
import * as productImageService from '../services/productImageService';

export const createProductImage = async (req: Request, res: Response) => {
  try {
    console.log('req.body', req.body);
    const productImage = await productImageService.createProductImageService(req.body);
    res.status(201).json(productImage);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar imagem do produto' });
  }
};

export const getProductImage = async (req: Request, res: Response) => {
  try {
    const { productImageId } = req.body;
    const productImages = await productImageService.getProductImage(productImageId);
    res.json(productImages);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao listar imagens de produtos' });
  }
};
