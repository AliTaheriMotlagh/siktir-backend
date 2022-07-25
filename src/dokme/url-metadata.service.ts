import { Injectable } from '@nestjs/common';
import * as mql from '@microlink/mql';
import { UrlMetadataDto } from './dto';

@Injectable()
export class UrlMetadataService {
  async getData(url: string) {
    const { status, data } = await mql(url);
    if (status) {
      const res: UrlMetadataDto = {
        description: data.description,
        icon: data.logo.url,
        img: data.image.url,
        title: data.title,
        url: data.url,
      };
      return res;
    }
  }
}
