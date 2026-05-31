import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

const fakeUsers: any[] = []; // depois vamos trocar por Prisma

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  async register(name: string, email: string, password: string) {
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = {
      id: Date.now(),
      name,
      email,
      password: hashedPassword,
    };

    fakeUsers.push(user);

    return {
      message: 'Usuário criado com sucesso',
      user,
    };
  }

  async login(email: string, password: string) {
    const user = fakeUsers.find((u) => u.email === email);

    if (!user) {
      throw new UnauthorizedException('Usuário não encontrado');
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      throw new UnauthorizedException('Senha inválida');
    }

    const token = this.jwtService.sign({
      sub: user.id,
      email: user.email,
    });

    return {
      access_token: token,
    };
  }
}