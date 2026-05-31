import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

const users: any[] = [];

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  async register(name: string, email: string, password: string) {
    const hashed = await bcrypt.hash(password, 10);

    const user = {
      id: Date.now(),
      name,
      email,
      password: hashed,
    };

    users.push(user);

    return user;
  }

  async login(email: string, password: string) {
    const user = users.find((u) => u.email === email);

    if (!user) throw new UnauthorizedException('Usuário não encontrado');

    const ok = await bcrypt.compare(password, user.password);

    if (!ok) throw new UnauthorizedException('Senha inválida');

    return {
      access_token: this.jwtService.sign({
        sub: user.id,
        email: user.email,
      }),
    };
  }
}