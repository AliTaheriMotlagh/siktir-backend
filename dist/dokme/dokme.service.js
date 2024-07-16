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
exports.DokmeService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const dto_1 = require("./dto");
const dayjs = require("dayjs");
const utc = require("dayjs/plugin/utc");
const url_metadata_service_1 = require("./url-metadata.service");
let DokmeService = class DokmeService {
    constructor(prisma, urlMetadataService) {
        this.prisma = prisma;
        this.urlMetadataService = urlMetadataService;
        dayjs.extend(utc);
    }
    async CreateDokme(dto, userId) {
        const urlMetadata = await this.urlMetadataService.getData(dto.url);
        return this.prisma.dokme.create({
            data: {
                url: dto.url,
                title: dto.title,
                description: dto.description,
                expiredAt: this.getTomorrowDate(),
                siktirCount: 0,
                userId: userId,
                urlTitle: urlMetadata.title,
                urlDescription: urlMetadata.description,
                urlImg: urlMetadata.img,
                urlIcon: urlMetadata.icon,
            },
        });
    }
    getTomorrowDate() {
        let tody = dayjs.utc();
        const mideNighitInIran = dayjs
            .utc()
            .set('hour', 20)
            .set('minute', 30)
            .set('second', 0);
        if (tody > mideNighitInIran) {
            tody = tody.add(1, 'day');
        }
        return tody.set('hour', 20).set('minute', 30).set('second', 0).format();
    }
    getTodayDate() {
        return dayjs.utc().format();
    }
    async GetAllDokmes(filter) {
        let orderBy;
        switch (filter.type) {
            case dto_1.FilterType.lastSiktir:
                orderBy = { updateAt: 'desc' };
                break;
            case dto_1.FilterType.newDokme:
                orderBy = { createdAt: 'desc' };
                break;
            case dto_1.FilterType.topDokme:
                orderBy = { siktirCount: 'desc' };
                break;
        }
        return await this.prisma.dokme.findMany({
            where: { expiredAt: { gt: this.getTodayDate() } },
            orderBy: orderBy,
        });
    }
    async GetDokmeById(dokmeId) {
        const dokme = await this.prisma.dokme.findFirst({
            where: { id: dokmeId, expiredAt: { gt: this.getTodayDate() } },
        });
        if (!dokme) {
            throw new common_1.NotFoundException();
        }
        return dokme;
    }
};
exports.DokmeService = DokmeService;
exports.DokmeService = DokmeService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        url_metadata_service_1.UrlMetadataService])
], DokmeService);
//# sourceMappingURL=dokme.service.js.map