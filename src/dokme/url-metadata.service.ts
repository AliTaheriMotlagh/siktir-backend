import { Injectable } from '@nestjs/common';
import * as mql from '@microlink/mql';
import { UrlMetadataDto } from './dto';

@Injectable()
export class UrlMetadataService {
  async getData(url: string) {
    const { status, data } = await mql(url);
    if (status) {
      const res: UrlMetadataDto = {
        description: this.getNullStringifNull(data.description),
        icon: this.getNullStringifNull(data.logo),
        img: this.getNullStringifNull(data.image),
        title: this.getNullStringifNull(data.title),
        url: this.getNullStringifNull(data.url),
      };
      return res;
    }
  }
  getNullStringifNull(data: any) {
    if (data?.url) {
      return data.url;
    }
    if (data) {
      return data;
    }
    return '';
  }
}
