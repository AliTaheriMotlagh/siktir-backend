import { HealthCheckService, HttpHealthIndicator } from '@nestjs/terminus';
import { PrismaHealthIndicator } from 'src/health/prisma-health.indicator';
export declare class HealthController {
    private health;
    private http;
    private db;
    constructor(health: HealthCheckService, http: HttpHealthIndicator, db: PrismaHealthIndicator);
    check(): Promise<import("@nestjs/terminus").HealthCheckResult>;
}
