import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { DokmeModule } from './dokme/dokme.module';

@Module({
  imports: [PrismaModule, AuthModule, UserModule, DokmeModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
