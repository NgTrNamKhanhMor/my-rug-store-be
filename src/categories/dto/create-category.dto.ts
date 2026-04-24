import { ApiProperty } from '@nestjs/swagger';

export class CreateCategoryDto {
  @ApiProperty({
    example: 'Hanoi Noir',
    description: 'The name of the rug collection',
  })
  name!: string;

  @ApiProperty({
    example: 'Dark, moody aesthetic inspired by the streets of Hanoi.',
    required: false,
  })
  description?: string;
}
