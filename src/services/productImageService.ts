import { PrismaClient } from '@prisma/client';
import { ProductImageDto } from '../shared/models/productImage';

const prisma = new PrismaClient();

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
