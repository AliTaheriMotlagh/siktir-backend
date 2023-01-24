import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { DokmeModule } from './dokme/dokme.module';
import { ConfigModule } from '@nestjs/config';
import { SiktirModule } from './siktir/siktir.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    PrismaModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'frontend-dist'),
    }),
    AuthModule,
    DokmeModule,
    SiktirModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
