import { AuthService } from './auth.service';
import { AuthDto } from './dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    Register(dto: AuthDto): Promise<import("./dto").TokenDto>;
}
