import { Injectable } from '@nestjs/common';
import * as cheerio from 'cheerio';
import { UrlMetadataDto } from './dto';
import { HttpService } from '@nestjs/axios';

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
          $('meta[name="description"]').attr('content') ||
          '',
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
          $('meta[name="title"]').attr('content') ||
          '',
        url: $('meta[property="og:url"]').attr('content') || '',
      };
      if (urlMetadata.icon.indexOf('http') !== 0) {
        urlMetadata.icon = `${url}${urlMetadata.icon}`;
      }
      if (urlMetadata.img.indexOf('http') !== 0) {
        urlMetadata.img = `${url}${urlMetadata.img}`;
      }
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