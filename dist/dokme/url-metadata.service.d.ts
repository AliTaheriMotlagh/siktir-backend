import { UrlMetadataDto } from './dto';
import { HttpService } from '@nestjs/axios';
export declare class UrlMetadataService {
    private readonly httpService;
    constructor(httpService: HttpService);
    getData(url: string): Promise<UrlMetadataDto>;
}
