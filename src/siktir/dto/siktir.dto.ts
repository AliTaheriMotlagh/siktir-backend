import { IsNotEmpty, IsString } from 'class-validator';

export class FireSiktirDto {
  @IsString()
  @IsNotEmpty()
  dokmeId: string;
}

export class SiktirDto {
  userId: string;
  dokmeId: string;
}
