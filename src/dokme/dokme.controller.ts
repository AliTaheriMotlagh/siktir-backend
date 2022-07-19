import { Controller, Get, UseGuards } from '@nestjs/common';
import { GetUser } from 'src/auth/decorator';
import { JwtGuard } from 'src/auth/guard';

@UseGuards(JwtGuard)
@Controller('dokmes')
export class DokmeController {
  @Get()
  getAll(@GetUser() user) {
    return user;
  }
}
