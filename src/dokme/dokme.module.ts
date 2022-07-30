import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { DokmeController } from './dokme.controller';
import { DokmeService } from './dokme.service';
import { UrlMetadataService } from './url-metadata.service';

@Module({
  imports: [HttpModule],
  controllers: [DokmeController],
  providers: [DokmeService, UrlMetadataService],
})
export class DokmeModule {}
