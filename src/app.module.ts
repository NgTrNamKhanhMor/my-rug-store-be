// src/app.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsModule } from './products/products.module';
import { CategoriesModule } from './categories/categories.module';
import { AuthModule } from './auth/auth.module';
import { Product } from './products/entities/product.entity';
import { Category } from './categories/entities/category.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root', // update with your credentials
      password: 'Namkhanh@2510',
      database: 'my_nest_db',
      autoLoadEntities: true,
      entities: [Product, Category],
      synchronize: true,
    }),
    ProductsModule,
    CategoriesModule,
    AuthModule,
  ],
})
export class AppModule {}
