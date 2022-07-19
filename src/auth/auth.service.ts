import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';

import { PrismaService } from 'src/prisma/prisma.service';
import { AuthDto } from './dto';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwt: JwtService,
    private config: ConfigService,
  ) {}

  async Register(dto: AuthDto) {
    try {
      const user = await this.prisma.user.findUnique({
        where: { fingerPrint: dto.fingerPrint },
        select: { id: true },
      });
      if (user) {
        return this.SignToken(user.id);
      }

      const newUser = await this.prisma.user.create({
        data: {
          fingerPrint: dto.fingerPrint,
        },
        select: { id: true },
      });
      return this.SignToken(newUser.id);
    } catch (error) {
      console.log(error);
    }
  }

  async FindUser(userId: string) {
    return await this.prisma.user.findFirst({
      where: { id: userId },
      select: { id: true },
    });
  }

  async SignToken(id: string) {
    const payload = { sub: id };
    const access_token = this.jwt.sign(payload, {
      expiresIn: '24h',
      secret: this.config.get('JWT_SECRET'),
    });
    return { access_token };
  }
}
