import { IsNotEmpty, IsString } from 'class-validator';

export class AuthDto {
  @IsString()
  @IsNotEmpty()
  fingerPrint: string;
}

export class TokenDto {
  access_token: string;
}
