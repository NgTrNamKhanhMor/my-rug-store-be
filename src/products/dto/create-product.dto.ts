// src/products/dto/create-product.dto.ts
import { ApiProperty } from '@nestjs/swagger';

export class CreateProductDto {
  @ApiProperty({
    example: 'Gaming Laptop',
    description: 'The name of the product',
  })
  title: string;

  @ApiProperty({ example: 1200, description: 'Price in USD' })
  price: number;

  @ApiProperty({ example: 1, description: 'The ID of the category' })
  categoryId: number;
}
