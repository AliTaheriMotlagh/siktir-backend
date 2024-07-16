import { Strategy } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';
import { AuthService } from '../auth.service';
declare const JwtStrategy_base: new (...args: any[]) => InstanceType<typeof Strategy>;
export declare class JwtStrategy extends JwtStrategy_base {
    private authService;
    constructor(config: ConfigService, authService: AuthService);
    validate(payload: any): Promise<{
        id: string;
        createdAt: Date;
        fingerPrint: string;
        fpData: import(".prisma/client").Prisma.JsonValue;
    }>;
}
export {};
