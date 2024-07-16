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
exports.SiktirController = void 0;
const common_1 = require("@nestjs/common");
const decorator_1 = require("../auth/decorator");
const guard_1 = require("../auth/guard");
const dto_1 = require("./dto");
const siktir_service_1 = require("./siktir.service");
let SiktirController = class SiktirController {
    constructor(siktirService) {
        this.siktirService = siktirService;
    }
    FireSiktir(userId, dto) {
        return this.siktirService.FireSiktir({ dokmeId: dto.dokmeId, userId });
    }
    GetUserSiktir(userId) {
        return this.siktirService.GetUserSiktir(userId);
    }
    isDokmeSiktirByUser(userId, params) {
        return this.siktirService.isDokmeSiktirByUser(userId, params.dokmeId);
    }
};
exports.SiktirController = SiktirController;
__decorate([
    (0, common_1.Put)('fire'),
    __param(0, (0, decorator_1.GetUser)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, dto_1.FireSiktirDto]),
    __metadata("design:returntype", void 0)
], SiktirController.prototype, "FireSiktir", null);
__decorate([
    (0, common_1.Get)('my'),
    __param(0, (0, decorator_1.GetUser)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], SiktirController.prototype, "GetUserSiktir", null);
__decorate([
    (0, common_1.Get)(':dokmeId'),
    __param(0, (0, decorator_1.GetUser)('id')),
    __param(1, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], SiktirController.prototype, "isDokmeSiktirByUser", null);
exports.SiktirController = SiktirController = __decorate([
    (0, common_1.UseGuards)(guard_1.JwtGuard),
    (0, common_1.Controller)('api/siktir'),
    __metadata("design:paramtypes", [siktir_service_1.SiktirService])
], SiktirController);
//# sourceMappingURL=siktir.controller.js.map