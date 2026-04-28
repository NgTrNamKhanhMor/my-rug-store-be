import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsString,
  IsNumber,
  IsOptional,
  IsArray,
  IsUrl,
} from 'class-validator';

export class CreateProductDto {
  @ApiProperty({ example: 'Vintage Hanoi Wool Rug' })
  @IsString()
  @IsNotEmpty()
  name!: string;

  @ApiProperty({ example: 1 })
  @IsNumber()
  @IsNotEmpty()
  categoryId!: number;

  @ApiProperty({ example: 250.5 })
  @IsNumber()
  @IsNotEmpty()
  price!: number;

  @ApiProperty({ example: 'https://cdn.sonstudio.vn/rug-01.jpg' })
  @IsString()
  @IsNotEmpty()
  @IsUrl()
  image!: string;

  @ApiPropertyOptional({ example: 'Hand-woven with traditional patterns' })
  @IsString()
  @IsOptional()
  description?: string;

  @ApiPropertyOptional({
    example: ['100% Wool', 'Hand-dyed', 'Made in Hanoi'],
    type: [String],
  })
  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  details?: string[];
}
