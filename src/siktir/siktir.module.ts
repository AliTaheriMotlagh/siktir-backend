import { Module } from '@nestjs/common';
import { SiktirController } from './siktir.controller';
import { SiktirService } from './siktir.service';

@Module({
  controllers: [SiktirController],
  providers: [SiktirService]
})
export class SiktirModule {}
