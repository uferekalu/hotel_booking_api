/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Bookings } from "./bookings.entity";

@Entity()
export class BookingStatus {
  @PrimaryGeneratedColumn()
  bookingStatusID: number

  @Column()
  status: string

  @Column()
  description: string

  @Column()
  sortOrder: string

  @Column()
  active: boolean

  @OneToMany((type) => Bookings, booking => booking.bookingStatus)
  @JoinColumn()
  bookings: Bookings[]
}