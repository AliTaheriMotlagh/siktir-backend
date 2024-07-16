import { PrismaService } from 'src/prisma/prisma.service';
import { SiktirDto } from './dto';
export declare class SiktirService {
    private prisma;
    constructor(prisma: PrismaService);
    FireSiktir(dto: SiktirDto): Promise<{
        id: string;
        createdAt: Date;
        updateAt: Date;
        expiredAt: Date;
        url: string;
        title: string;
        description: string;
        siktirCount: number;
        urlTitle: string;
        urlDescription: string;
        urlImg: string;
        urlIcon: string;
        userId: string | null;
    }>;
    GetUserSiktir(userId: string): Promise<{
        dokmeId: string;
    }[]>;
    isDokmeSiktirByUser(userId: string, dokmeId: string): Promise<boolean>;
}
