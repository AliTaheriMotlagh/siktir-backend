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
    let tody = new Date();
    return new Date(tody.setUTCHours(24, 0, 0, 0)).toISOString();
  }

  getTodayDate(): string {
    let tody = new Date();
    return new Date(tody.setUTCHours(0, 0, 0, 0)).toISOString();
  }

  async GetAllDokmes() {
    return this.prisma.dokme.findMany({
      where: { expiredAt: { gt: this.getTodayDate() } },
      orderBy: { updateAt: 'desc' },
    });
  }
}
