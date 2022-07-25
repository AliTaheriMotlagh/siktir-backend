import { HttpException, Injectable } from '@nestjs/common';
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
      throw new HttpException('you alredy siktir this dokme', 406);
    }

    await this.prisma.siktir.create({
      data: { dokmeId: dto.dokmeId, userId: dto.userId },
    });
    return await this.prisma.dokme.update({
      where: { id: dto.dokmeId },
      data: { siktirCount: { increment: 1 } },
    });
  }
  async GetUserSiktir(userId: string) {
    return await this.prisma.siktir.findMany({
      where: { userId },
      select: { dokmeId: true },
    });
  }

  async isDokmeSiktirByUser(userId: string, dokmeId: string) {
    const siktir = await this.prisma.siktir.findFirst({
      where: { userId, dokmeId },
    });
    if (!siktir) {
      return false;
    }
    return true;
  }
}
