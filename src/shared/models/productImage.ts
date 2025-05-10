export interface ProductImageDto {
  id?: string;
  productId: number;
  path: string;
  filename: string;
}

export class ProductImage {
  id?: string;
  productId: number;
  filename?: string;
  path: string;

  constructor(productImageDto: ProductImage) {
    this.id = productImageDto.id;
    this.productId = productImageDto.productId;
    this.path = productImageDto.path;
    this.filename = productImageDto.filename;
  }
}