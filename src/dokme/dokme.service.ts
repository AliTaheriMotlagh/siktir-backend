import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { DokmeDto } from './dto';

import * as dayjs from 'dayjs';
import * as utc from 'dayjs/plugin/utc';
import { UrlMetadataService } from './url-metadata.service';

@Injectable()
export class DokmeService {
  constructor(
    private prisma: PrismaService,
    private urlMetadataService: UrlMetadataService,
  ) {
    dayjs.extend(utc);
  }
  async CreateDokme(dto: DokmeDto, userId: string) {
    this.urlMetadataService.getData(dto.url);
    return this.prisma.dokme.create({
      data: {
        url: dto.url,
        title: dto.title,
        description: dto.description,
        expiredAt: this.getTomorrowDate(),
        siktirCount: 0,
        userId: userId,
      },
    });
  }

  getTomorrowDate(): string {
    let tody = dayjs.utc();
    const mideNighitInIran = dayjs
      .utc()
      .set('hour', 19)
      .set('minute', 30)
      .set('second', 0);
    if (tody > mideNighitInIran) {
      tody = tody.add(1, 'day');
    }
    return tody.set('hour', 19).set('minute', 30).set('second', 0).format();
  }

  getTodayDate(): string {
    return dayjs.utc().format();
  }

  async GetAllDokmes() {
    return this.prisma.dokme.findMany({
      where: { expiredAt: { gt: this.getTodayDate() } },
      orderBy: { updateAt: 'desc' },
    });
  }
}
