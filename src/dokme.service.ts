import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { Dokme, Prisma } from '@prisma/client';

@Injectable()
export class DokmeService {
  constructor(private prisma: PrismaService) {}

  async dokme(
    dokmeWhereUniqueInput: Prisma.DokmeWhereUniqueInput,
  ): Promise<Dokme | null> {
    return this.prisma.dokme.findUnique({
      where: dokmeWhereUniqueInput,
    });
  }

  async dokmes(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.DokmeWhereUniqueInput;
    where?: Prisma.DokmeWhereInput;
    orderBy?: Prisma.DokmeOrderByWithRelationInput;
  }): Promise<Dokme[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.dokme.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async createDokme(data: Dokme): Promise<Dokme> {
    return this.prisma.dokme.create({
      data,
    });
  }

  async updateDokme(params: {
    where: Prisma.DokmeWhereUniqueInput;
    data: Prisma.DokmeUpdateInput;
  }): Promise<Dokme> {
    const { where, data } = params;
    return this.prisma.dokme.update({
      data,
      where,
    });
  }

  async deleteDokme(where: Prisma.DokmeWhereUniqueInput): Promise<Dokme> {
    return this.prisma.dokme.delete({
      where,
    });
  }
}
