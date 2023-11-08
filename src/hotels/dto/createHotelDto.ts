/* eslint-disable prettier/prettier */
import { IsEmail, IsString } from 'class-validator';

export class CreateHotelDto {
  @IsString()
  hotelCode: string;
  
  @IsString()
  name: string;

  @IsString()
  moto: string;

  @IsString()
  address: string;

  @IsString()
  address2: string;

  @IsString()
  city: string;

  @IsString()
  state: string;

  @IsString()
  zipCode: string;

  @IsString()
  mainPhoneNumber: string;

  @IsString()
  faxNumber: string;

  @IsString()
  tollFreeNumber: string;

  @IsEmail()
  companyEmailAddress: string;

  @IsString()
  websiteAddress: string;
}
