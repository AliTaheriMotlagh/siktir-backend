import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthDto, TokenDto } from './dto';
export declare class AuthService {
    private prisma;
    private jwt;
    private config;
    constructor(prisma: PrismaService, jwt: JwtService, config: ConfigService);
    ValidateUser(userId: string): Promise<{
        id: string;
        createdAt: Date;
        fingerPrint: string;
        fpData: import(".prisma/client").Prisma.JsonValue;
    }>;
    Register(dto: AuthDto): Promise<TokenDto>;
    private signToken;
}
