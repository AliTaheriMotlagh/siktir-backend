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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DokmeController = void 0;
const common_1 = require("@nestjs/common");
const decorator_1 = require("../auth/decorator");
const guard_1 = require("../auth/guard");
const dokme_service_1 = require("./dokme.service");
const dto_1 = require("./dto");
let DokmeController = class DokmeController {
    constructor(dokmeService) {
        this.dokmeService = dokmeService;
    }
    CreateDokme(userId, dto) {
        return this.dokmeService.CreateDokme(dto, userId);
    }
    GetAllDokmes(filter) {
        return this.dokmeService.GetAllDokmes(filter);
    }
    GetDokmeById(id) {
        return this.dokmeService.GetDokmeById(id);
    }
};
exports.DokmeController = DokmeController;
__decorate([
    (0, common_1.Post)('create'),
    __param(0, (0, decorator_1.GetUser)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, dto_1.DokmeDto]),
    __metadata("design:returntype", void 0)
], DokmeController.prototype, "CreateDokme", null);
__decorate([
    (0, common_1.Post)('all'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.FilterDto]),
    __metadata("design:returntype", void 0)
], DokmeController.prototype, "GetAllDokmes", null);
__decorate([
    (0, common_1.Get)('one/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], DokmeController.prototype, "GetDokmeById", null);
exports.DokmeController = DokmeController = __decorate([
    (0, common_1.UseGuards)(guard_1.JwtGuard),
    (0, common_1.Controller)('api/dokmes'),
    __metadata("design:paramtypes", [dokme_service_1.DokmeService])
], DokmeController);
//# sourceMappingURL=dokme.controller.js.map