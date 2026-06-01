import { Controller, Get, Post, Body } from '@nestjs/common';
import { MedicamentosService } from './medicamentos.service';

@Controller('medicamentos')
export class MedicamentosController {
  constructor(private readonly service: MedicamentosService) {}

  @Get()
  listar() {
    return this.service.listar();
  }

  @Post()
  criar(@Body() body: any) {
    return this.service.criar(body);
  }
}