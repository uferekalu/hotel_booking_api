/* eslint-disable prettier/prettier */
import { IsString, IsBoolean } from 'class-validator';

export class CreateBookingStatusDto {
  @IsString()
  status: string;

  @IsString()
  description: string;

  @IsString()
  sortOrder: string;

  @IsBoolean()
  active: false;
}
