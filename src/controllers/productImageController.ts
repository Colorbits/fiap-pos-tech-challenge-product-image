import { Request, Response } from 'express';
import * as productImageService from '../services/productImageService';
import { writeFile } from 'fs/promises';
import formidable, { errors as formidableErrors } from 'formidable';

import path, { join } from 'path';
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
    let rawData = fs.readFileSync(oldPath)

    let filePath = path.join(__dirname, '../../uploads') + '/' + files.image[0]?.originalFilename;

    fs.writeFile(filePath, rawData, async (err) => {
      if (err) console.log(err)
      const productImage = await productImageService.createProductImageService({
        productId: Number(productId),
        filename: files?.image?.[0]?.originalFilename || 'image.jpg',
        path: filePath,
      });

      res.status(201).json(productImage);
    })

  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar imagem do produto' });
  }
};

export const getProductImage = async (req: Request, res: Response) => {
  try {
    const { productImageId } = req.params;
    const productImage = await productImageService.getProductImage(productImageId);
    if (!productImage) {
      return res.status(404).json({ error: 'Imagem do produto não encontrada' });
    }
    res.sendFile(productImage.path);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar imagem de produto' });
  }
};
