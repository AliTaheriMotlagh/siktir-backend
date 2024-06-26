import { IsNotEmpty, IsString } from 'class-validator';

export class AuthDto {
  @IsString()
  @IsNotEmpty()
  fingerPrint: string;
}

export class TokenDto {
  @IsString()
  @IsNotEmpty()
  access_token: string;
}
