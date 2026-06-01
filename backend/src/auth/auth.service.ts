import { Injectable, UnauthorizedException } from '@nestjs/common';

const users: any[] = [];

@Injectable()
export class AuthService {
  register(name: string, email: string, password: string) {
    const user = {
      id: Date.now(),
      name,
      email,
      password,
    };

    users.push(user);

    return user;
  }

  login(email: string, password: string) {
    const user = users.find((u) => u.email === email);

    if (!user) {
      throw new UnauthorizedException('Usuário não encontrado');
    }

    if (user.password !== password) {
      throw new UnauthorizedException('Senha inválida');
    }

    return {
      message: 'Login realizado com sucesso',
      user,
    };
  }
}