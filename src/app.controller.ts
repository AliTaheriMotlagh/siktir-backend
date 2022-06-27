import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { Dokme } from '@prisma/client';
import { AppService } from './app.service';
import { DokmeService } from './dokme.service';

@Controller('api')
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly dokmeService: DokmeService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @HttpCode(HttpStatus.OK)
  @Get('dokme/list')
  getAllDokme(): Promise<Dokme[]> {
    return this.dokmeService.dokmes({ take: 10 });
  }

  @HttpCode(HttpStatus.OK)
  @Post('dokme/create')
  async createDokme(
    @Body() postData: { title: string; url: string; description: string },
  ): Promise<Dokme> {
    const dto: Dokme = {
      url: 'testUrl',
      description: postData.description,
      expireDate: new Date(),
      isAnonymous: false,
      link: postData.url,
      title: postData.title,
      siktirCount: 0,
      visitCount: 0,
      userId: 'b80057ec-1316-4937-8a67-62aa2bc669a1',
      createdAt: new Date(),
      id: '0',
    };
    return this.dokmeService.createDokme(dto);
  }
}
