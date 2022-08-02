import {
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsString,
  Max,
  Min,
} from 'class-validator';

export enum FilterType {
  topDokme = 'topDokme',
  lastSiktir = 'lastSiktir',
  newDokme = 'newDokme',
}

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

export class FilterDto {
  @IsEnum(FilterType)
  @IsNotEmpty()
  type: FilterType;
}
