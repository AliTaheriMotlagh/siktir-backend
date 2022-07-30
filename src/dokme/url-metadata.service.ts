import { Injectable } from '@nestjs/common';
import * as cheerio from 'cheerio';
import { UrlMetadataDto } from './dto';
import { HttpService } from '@nestjs/axios';
import { data } from 'cheerio/lib/api/attributes';
import { map } from 'rxjs';

@Injectable()
export class UrlMetadataService {
  constructor(private readonly httpService: HttpService) {}
  async getData(url: string) {
    try {
      const htmlRes = await this.httpService.get(url).toPromise();
      const $ = cheerio.load(htmlRes.data);
      const urlMetadata: UrlMetadataDto = {
        description:
          $('meta[property="og:description"]').attr('content') ||
          $('meta[name="description"]').attr('content'),
        icon:
          $('link[rel="icon"]').attr('href') ||
          $('link[rel="shortcut icon"]').attr('href') ||
          '',
        img:
          $('meta[property="og:image"]').attr('content') ||
          $('meta[property="og:image:url"]').attr('content') ||
          '',
        title:
          $('meta[property="og:title"]').attr('content') ||
          $('title').text() ||
          $('meta[name="title"]').attr('content'),
        url: $('meta[property="og:url"]').attr('content'),
      };
      return urlMetadata;
    } catch (error) {
      const urlMetadata: UrlMetadataDto = {
        description: '',
        icon: '',
        img: '',
        title: '',
        url: '',
      };
      return urlMetadata;
    }
  }
}
