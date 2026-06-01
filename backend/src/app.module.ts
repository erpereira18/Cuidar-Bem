import { Module } from '@nestjs/common';
import { MedicamentosModule } from './medicamentos/medicamentos.module';
import { RotinasModule } from './rotinas/rotinas.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    MedicamentosModule,
    RotinasModule,
    AuthModule,
  ],
})
export class AppModule {}