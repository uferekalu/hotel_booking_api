/* eslint-disable prettier/prettier */
import { IsNumber, IsString } from "class-validator";

export class CreateBookingDto {
  @IsString()
  dateFrom: string

  @IsString()
  dateTo: string

  @IsNumber()
  roomCount: number

}