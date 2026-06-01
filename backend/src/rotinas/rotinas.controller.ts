import { Controller, Get, Post, Body } from '@nestjs/common';
import { RotinasService } from './rotinas.service';

@Controller('rotinas')
export class RotinasController {
  constructor(private readonly service: RotinasService) {}

  @Get()
  listar() {
    return this.service.listar();
  }

  @Post()
  criar(@Body() body: any) {
    return this.service.criar(body);
  }
}