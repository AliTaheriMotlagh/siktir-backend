import { Body, Controller, Get, Param, Put, UseGuards } from '@nestjs/common';
import { GetUser } from 'src/auth/decorator';
import { JwtGuard } from 'src/auth/guard';
import { FireSiktirDto, SiktirDto } from './dto';
import { SiktirService } from './siktir.service';

@UseGuards(JwtGuard)
@Controller('api/siktir')
export class SiktirController {
  constructor(private siktirService: SiktirService) {}
  @Put('fire')
  FireSiktir(@GetUser('id') userId, @Body() dto: FireSiktirDto) {
    return this.siktirService.FireSiktir({ dokmeId: dto.dokmeId, userId });
  }

  @Get('my')
  GetUserSiktir(@GetUser('id') userId) {
    return this.siktirService.GetUserSiktir(userId);
  }

  @Get(':dokmeId')
  isDokmeSiktirByUser(@GetUser('id') userId, @Param() params) {
    return this.siktirService.isDokmeSiktirByUser(userId, params.dokmeId);
  }
}
