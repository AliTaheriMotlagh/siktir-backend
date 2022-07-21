import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';

import { PrismaService } from 'src/prisma/prisma.service';
import { AuthDto, TokenDto } from './dto';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwt: JwtService,
    private config: ConfigService,
  ) {}

  async ValidateUser(userId: string) {
    return await this.prisma.user.findFirst({
      where: { id: userId },
    });
  }

  async Register(dto: AuthDto): Promise<TokenDto> {
    const user = await this.prisma.user.findFirst({
      where: { fingerPrint: dto.fingerPrint },
      select: { id: true },
    });
    if (user) {
      return this.signToken(user.id);
    }

    const newUser = await this.prisma.user.create({
      data: {
        fingerPrint: dto.fingerPrint,
      },
      select: { id: true },
    });
    return this.signToken(newUser.id);
  }

  private async signToken(userId: string): Promise<TokenDto> {
    const payload = { sub: userId };
    const token = this.jwt.sign(payload, {
      expiresIn: '24h',
      secret: this.config.get('JWT_SECRET'),
    });
    const dto: TokenDto = {
      access_token: token,
    };
    return dto;
  }
}
