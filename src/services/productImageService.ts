import { ProductImage, ProductImageDto } from '../shared/models/productImage';
import { PrismaClient } from '@prisma/client';

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

export const getProductImage = async (productImageId: string) => {
  return prisma.productImage.findFirst({
    where: {
      id: productImageId,
    },
  });
};
