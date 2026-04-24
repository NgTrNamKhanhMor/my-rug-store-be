import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateProductDto {
  @ApiProperty({ example: 'Vintage Hanoi Wool Rug' })
  @IsString() // Changed from @isString() to @IsString()
  @IsNotEmpty({ message: 'The name field is required and cannot be empty' })
  name!: string;

  @ApiProperty({ example: 'Hand-woven with traditional patterns' })
  @IsString()
  @IsOptional()
  description?: string;

  @ApiProperty({ example: 250.5 })
  @IsNumber()
  @IsNotEmpty()
  price!: number;

  @ApiProperty({ example: 5 })
  @IsNumber()
  @IsNotEmpty()
  stock!: number;

  @ApiProperty({ example: 1 })
  @IsNumber()
  @IsNotEmpty()
  categoryId!: number;
}
