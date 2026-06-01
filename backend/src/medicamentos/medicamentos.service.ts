import { Injectable } from '@nestjs/common';

@Injectable()
export class MedicamentosService {
  private medicamentos: any[] = [];

  listar() {
    return this.medicamentos;
  }

  criar(dados: any) {
    const medicamento = {
      id: Date.now(),
      ...dados,
    };

    this.medicamentos.push(medicamento);

    return medicamento;
  }
}