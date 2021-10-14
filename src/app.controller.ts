import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return 'Hola Mundo';
  }
  // To create a new ENDPOINT
  @Get('nuevo')
  newEnpoint() {
    return 'Soy nuevo';
  }

  @Get('/ruta/')
  newSecondEndpoint() {
    return 'con /sas/';
  }

  //Query params
  @Get('products/filter')
  getProductsFilter(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    return `product ${brand} ${limit} ${offset}`;
  }
  //To get params from an endpoint
  @Get('products/:id')
  getProduct(@Param('id') id: number) {
    return `product ${id}`;
  }

  @Get('categories/:code/products/:id')
  getCategory(@Param('code') code: number, @Param('id') id: number) {
    return `product ${id} and category ${code}`;
  }
}
