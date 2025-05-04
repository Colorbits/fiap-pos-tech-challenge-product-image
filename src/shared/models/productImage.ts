export interface ProductImageDto {
  id: number;
  productId: number;
  path: string;
}

export class ProductImage {
  id: number;
  productId: number;
  path: string;

  constructor(productImageDto: ProductImage) {
    this.id = productImageDto.id;
    this.productId = productImageDto.productId;
    this.path = productImageDto.path;
  }
}