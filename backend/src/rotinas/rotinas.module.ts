import { Module } from '@nestjs/common';
import { RotinasController } from './rotinas.controller';
import { RotinasService } from './rotinas.service';

@Module({
  controllers: [RotinasController],
  providers: [RotinasService],
})
export class RotinasModule {}