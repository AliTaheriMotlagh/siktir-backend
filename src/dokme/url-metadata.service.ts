import { Injectable } from '@nestjs/common';
import puppeteer from 'puppeteer';
import { UrlMetadataDto } from './dto';

@Injectable()
export class UrlMetadataService {
  private async getPageContent(url: string): Promise<PageContent> {
    const browser = await puppeteer.launch({
      headless: 'new',
      // `headless: true` (default) enables old Headless;
      // `headless: 'new'` enables new Headless;
      // `headless: false` enables “headful” mode.
    });
    const page = await browser.newPage();
    await page.goto(url);

    const title = await page.title();
    const description = await page.evaluate(() => {
      return document.querySelector('meta[property="og:description"]').getAttribute('content') || '';
    });
    const icon = await page.evaluate(() => {
      return document.querySelector('link[rel="icon"]').getAttribute('href') || document.querySelector('link[rel="shortcut icon"]').getAttribute('href') || '';
    });
    const img = await page.evaluate(() => {
      return document.querySelector('meta[property="og:image"]').getAttribute('content') || document.querySelector('meta[property="og:image:url"]').getAttribute('content') || '';
    });

    await browser.close();

    return { title, description, icon, img };
  }

  async getData(url: string): Promise<UrlMetadataDto> {
    try {
      const pageContent = await this.getPageContent(url);
      const urlMetadata: UrlMetadataDto = {
        title: pageContent.title,
        description: pageContent.description,
        icon: pageContent.icon,
        img: pageContent.img,
        url,
      };

      if (pageContent.icon.indexOf('http') !== 0) {
        urlMetadata.icon = `${url}${pageContent.icon}`;
      }

      if (pageContent.img.indexOf('http') !== 0) {
        urlMetadata.img = `${url}${pageContent.img}`;
      }

      return urlMetadata;
    } catch (error) {
      console.error(error);
      return {
        title: '',
        description: '',
        icon: '',
        img: '',
        url: '',
      };
    }
  }
}

interface PageContent {
  title: string;
  description: string;
  icon: string;
  img: string;
}
