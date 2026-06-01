import { Injectable } from '@nestjs/common';

@Injectable()
export class RotinasService {
  private rotinas: any[] = [];

  listar() {
    return this.rotinas;
  }

  criar(dados: any) {
    const rotina = {
      id: Date.now(),
      ...dados,
    };

    this.rotinas.push(rotina);

    return rotina;
  }
}