import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private jwtService;
    constructor(jwtService: JwtService);
    register(name: string, email: string, password: string): Promise<{
        id: number;
        name: string;
        email: string;
        password: string;
    }>;
    login(email: string, password: string): Promise<{
        access_token: string;
    }>;
}
