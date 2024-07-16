"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UrlMetadataService = void 0;
const common_1 = require("@nestjs/common");
const cheerio = require("cheerio");
const axios_1 = require("@nestjs/axios");
let UrlMetadataService = class UrlMetadataService {
    constructor(httpService) {
        this.httpService = httpService;
    }
    async getData(url) {
        try {
            const htmlRes = await this.httpService.get(url).toPromise();
            const $ = cheerio.load(htmlRes.data);
            const urlMetadata = {
                description: $('meta[property="og:description"]').attr('content') ||
                    $('meta[name="description"]').attr('content') ||
                    '',
                icon: $('link[rel="icon"]').attr('href') ||
                    $('link[rel="shortcut icon"]').attr('href') ||
                    '',
                img: $('meta[property="og:image"]').attr('content') ||
                    $('meta[property="og:image:url"]').attr('content') ||
                    '',
                title: $('meta[property="og:title"]').attr('content') ||
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
        }
        catch (error) {
            const urlMetadata = {
                description: '',
                icon: '',
                img: '',
                title: '',
                url: '',
            };
            return urlMetadata;
        }
    }
};
exports.UrlMetadataService = UrlMetadataService;
exports.UrlMetadataService = UrlMetadataService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [axios_1.HttpService])
], UrlMetadataService);
//# sourceMappingURL=url-metadata.service.js.map