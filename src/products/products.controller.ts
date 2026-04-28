import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  ParseIntPipe,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  // ======================================================
  // SECTION: PUBLIC (Storefront)
  // ======================================================

  @ApiTags('Storefront') // This groups the GET requests together
  @Get()
  @ApiOperation({ summary: 'Get all products for the rug shop' })
  findAll() {
    return this.productsService.findAll();
  }

  @ApiTags('Storefront')
  @Get(':id')
  @ApiOperation({ summary: 'Get product details by ID' })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.productsService.findOne(id);
  }

  // ======================================================
  // SECTION: ADMIN (Inventory Management)
  // ======================================================

  @ApiTags('Inventory Management') // This groups the CRUD actions together
  @ApiBearerAuth() // Adds the "lock" icon in Swagger for these routes
  @UseGuards(AuthGuard('jwt'))
  @Post()
  @ApiOperation({ summary: 'Create a new product (Admin Only)' })
  create(@Body() createProductDto: CreateProductDto) {
    return this.productsService.create(createProductDto);
  }

  @ApiTags('Inventory Management')
  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  @Patch(':id')
  @ApiOperation({ summary: 'Update product information (Admin Only)' })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateProductDto: UpdateProductDto,
  ) {
    return this.productsService.update(id, updateProductDto);
  }

  @ApiTags('Inventory Management')
  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  @Delete(':id')
  @ApiOperation({ summary: 'Remove a product from stock (Admin Only)' })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.productsService.remove(id);
  }
}
