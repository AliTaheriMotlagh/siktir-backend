import { IsNotEmpty, IsString } from 'class-validator';

export class DokmeDto {
  @IsString()
  @IsNotEmpty()
  url: string;
  @IsString()
  @IsNotEmpty()
  title: string;
  @IsString()
  @IsNotEmpty()
  description: string;
}