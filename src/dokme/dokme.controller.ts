import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { GetUser } from 'src/auth/decorator';
import { JwtGuard } from 'src/auth/guard';
import { DokmeService } from './dokme.service';
import { DokmeDto } from './dto';

@UseGuards(JwtGuard)
@Controller('api/dokmes')
export class DokmeController {
  constructor(private dokmeService: DokmeService) {}
  @Post('create')
  CreateDokme(@GetUser('id') userId, @Body() dto: DokmeDto) {
    return this.dokmeService.CreateDokme(dto, userId);
  }
  @Get('all')
  GetAllDokmes() {
    return this.dokmeService.GetAllDokmes();
  }
  @Get('one/:id')
  GetDokmeById(@Param('id') id) {
    return this.dokmeService.GetDokmeById(id);
  }
}
