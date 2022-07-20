import { Module } from '@nestjs/common';
import { DokmeController } from './dokme.controller';
import { DokmeService } from './dokme.service';

@Module({
  controllers: [DokmeController],
  providers: [DokmeService]
})
export class DokmeModule {}
