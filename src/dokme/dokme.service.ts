import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { DokmeDto } from './dto';

@Injectable()
export class DokmeService {
  constructor(private prisma: PrismaService) {}
  async CreateDokme(dto: DokmeDto, userId: string) {
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
    const tody = new Date();
    const mideNighitInIran = new Date().setUTCHours(19, 30, 0, 0);
    if (tody.getUTCDate() > mideNighitInIran) {
      tody.setDate(tody.getDate() + 1);
    }
    return new Date(tody.setUTCHours(19, 30, 0, 0)).toISOString();
  }

  getTodayDate(): string {
    const tody = new Date();
    return tody.toISOString();
  }

  async GetAllDokmes() {
    return this.prisma.dokme.findMany({
      where: { expiredAt: { gt: this.getTodayDate() } },
      orderBy: { updateAt: 'desc' },
    });
  }
}
