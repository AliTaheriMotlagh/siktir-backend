import { FireSiktirDto } from './dto';
import { SiktirService } from './siktir.service';
export declare class SiktirController {
    private siktirService;
    constructor(siktirService: SiktirService);
    FireSiktir(userId: any, dto: FireSiktirDto): Promise<{
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
    GetUserSiktir(userId: any): Promise<{
        dokmeId: string;
    }[]>;
    isDokmeSiktirByUser(userId: any, params: any): Promise<boolean>;
}
