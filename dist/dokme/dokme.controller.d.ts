import { DokmeService } from './dokme.service';
import { DokmeDto, FilterDto } from './dto';
export declare class DokmeController {
    private dokmeService;
    constructor(dokmeService: DokmeService);
    CreateDokme(userId: any, dto: DokmeDto): Promise<{
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
    GetAllDokmes(filter: FilterDto): Promise<{
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
    }[]>;
    GetDokmeById(id: any): Promise<{
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
}
