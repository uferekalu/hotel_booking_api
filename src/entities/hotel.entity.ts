/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Bookings } from './bookings.entity';

@Entity()
export class Hotel {
  @PrimaryGeneratedColumn()
  hotelID: number;

  @Column()
  hotelCode: string;

  @Column()
  name: string;

  @Column()
  moto: string;

  @Column()
  address: string;

  @Column()
  address2: string;

  @Column()
  city: string;

  @Column()
  state: string;

  @Column()
  zipCode: string;

  @Column()
  mainPhoneNumber: string;

  @Column()
  faxNumber: string;

  @Column()
  tollFreeNumber: string;

  @Column()
  companyEmailAddress: string;

  @Column()
  websiteAddress: string;

  @OneToMany((type) => Bookings, (booking) => booking.hotel)
  @JoinColumn()
  bookings: Bookings[];
}
