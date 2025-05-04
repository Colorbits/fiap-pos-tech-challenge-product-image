import { ProductImage, ProductImageDto } from '../shared/models/productImage';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const createProductImageService = async (productImageDto: ProductImageDto) => {
  return prisma.productImage.create({
    data: {
      productId: productImageDto.productId,
      path: productImageDto.path,
    },
  });
};

export const getProductImage = async (productImageId: ProductImage['id']) => {
  return prisma.productImage.findFirst({
    where: {
      id: productImageId,
    },
  });
};
