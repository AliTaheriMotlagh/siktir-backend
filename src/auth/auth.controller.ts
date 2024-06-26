import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto';

@Controller('api/auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @Post('register')
  Register(@Body() dto: AuthDto) {
    return this.authService.Register(dto);
  }
}
