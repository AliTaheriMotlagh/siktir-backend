import { NotAcceptableException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { SiktirDto } from './dto';

@Injectable()
export class SiktirService {
  constructor(private prisma: PrismaService) {}
  async FireSiktir(dto: SiktirDto) {
    const siktir = await this.prisma.siktir.findFirst({
      where: { dokmeId: dto.dokmeId, userId: dto.userId },
    });
    if (siktir) {
      throw new NotAcceptableException('you already sikir this dokme');
    }

    await this.prisma.siktir.create({
      data: { dokmeId: dto.dokmeId, userId: dto.userId },
    });

    return await this.prisma.dokme.update({
      where: { id: dto.dokmeId },
      data: { siktirCount: { increment: 1 } },
    });
  }
}
