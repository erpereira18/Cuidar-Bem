import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    register(body: RegisterDto): Promise<{
        id: number;
        name: string;
        email: string;
        password: string;
    }>;
    login(body: LoginDto): Promise<{
        access_token: string;
    }>;
}
