import prisma from '../client';
import { ProductImageDto } from '../shared/models/productImage';

// Remove a instância direta do PrismaClient
// const prisma = new PrismaClient();

export const createProductImageService = async (productImageDto: ProductImageDto) => {
  return prisma.productImage.create({
    data: {
      productId: productImageDto.productId,
      filename: productImageDto.filename,
      path: productImageDto.path,
    },
  });
};

export const getImagesByproductId = async (productId: string) => {
  return prisma.productImage.findMany({
    where: {
      productId: Number(productId),
    },
  });
};

export const getProductImage = async (id: string) => {
  return prisma.productImage.findFirst({
    where: {
      id,
    },
  });
};

export default {
  createProductImageService,
  getImagesByproductId,
  getProductImage,
}