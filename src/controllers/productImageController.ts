import { Request, Response } from 'express';
import * as productImageService from '../services/productImageService';
import formidable from 'formidable';
import path from 'path';
import fs from 'fs';

export const createProductImage = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const form = formidable({});
    let fields;
    let files: formidable.Files;
    try {
      [fields, files] = await form.parse(req);
    } catch (err) {
      console.log('Error parsing form:', (err as Error).message);
      throw err;
    }

    if (!files.image?.length) return res.status(400).json({ error: 'Nenhum arquivo foi enviado.' });

    let oldPath = files.image[0]?.filepath;
    let rawData = fs.readFileSync(oldPath);
    const time = Math.floor(Date.now() / 1000);
    const newFileName = `${time}-${files.image[0]?.originalFilename}`;
    let filePath = path.join(__dirname, '../../uploads') + '/' + newFileName;

    fs.writeFile(filePath, rawData, async (err) => {
      if (err) console.log(err)
      const productImage = await productImageService.createProductImageService({
        productId: Number(productId),
        filename: newFileName || 'image.jpg',
        path: filePath,
      });

      res.status(201).json(productImage);
    })
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar imagem do produto' });
  }
};

export const getProductImageDetails = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const productImage = await productImageService.getImagesByproductId(productId);

    res.status(200).json(productImage);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar imagem de produto' });
  }
};

export const getImage = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const productImage = await productImageService.getProductImage(id);

    if (!productImage) {
      return res.status(404).json({ error: 'Imagem do produto não encontrada' });
    }

    res.sendFile(productImage.path);
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Erro ao buscar imagem de produto' });
  }
};
