import { PrismaService } from 'src/prisma/prisma.service';
import { DokmeDto, FilterDto } from './dto';
import { UrlMetadataService } from './url-metadata.service';
export declare class DokmeService {
    private prisma;
    private urlMetadataService;
    constructor(prisma: PrismaService, urlMetadataService: UrlMetadataService);
    CreateDokme(dto: DokmeDto, userId: string): Promise<{
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
    getTomorrowDate(): string;
    getTodayDate(): string;
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
    GetDokmeById(dokmeId: string): Promise<{
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
