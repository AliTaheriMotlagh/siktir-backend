import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthDto } from './dto';

@Injectable()
export class AuthService {
  constructor(private prismaService: PrismaService) {}

  register(dto: AuthDto) {
    return this.prismaService.user.create({
      data: {
        fingerPrint: dto.fingerPrint,
      },
    });
  }

  login() {
    return 'i am login';
  }
}
