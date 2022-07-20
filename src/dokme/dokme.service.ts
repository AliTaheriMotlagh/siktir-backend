import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { DokmeDto } from './dto';

@Injectable()
export class DokmeService {
  constructor(private prisma: PrismaService) {}
  async CreateDokme(dto: DokmeDto, userId: string) {
    const tody = new Date();
    tody.setHours(24, 0, 0, 0);
    return this.prisma.dokme.create({
      data: {
        url: dto.url,
        title: dto.title,
        description: dto.description,
        expiredAt: tody.toISOString(),
        siktirCount: 0,
        userId: userId,
      },
    });
  }
  async GetAllDokmes() {
    const tody = new Date();

    return this.prisma.dokme.findMany();
  }
}
