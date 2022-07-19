import { Module } from '@nestjs/common';
import { DokmeController } from './dokme.controller';

@Module({
  controllers: [DokmeController]
})
export class DokmeModule {}
