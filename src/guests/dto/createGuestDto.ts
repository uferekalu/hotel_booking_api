/* eslint-disable prettier/prettier */
import { IsEmail, IsString } from "class-validator";

export class CreateGuestDto {
  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsString()
  address: string;

  @IsString()
  address2: string;

  @IsString()
  city: string;

  @IsString()
  state: string;

  @IsString()
  country: string;

  @IsString()
  homePhoneNumber: string;

  @IsEmail()
  email: string;

  @IsString()
  gender: string;
 
  @IsString()
  zipCode: string;
}
