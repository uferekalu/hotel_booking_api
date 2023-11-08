/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Hotel } from './hotel.entity';
import { Guest } from './guest.entity';
import { ReservationAgent } from './reservationAgent.entity';
import { BookingStatus } from './bookingStatus.entity';

@Entity()
export class Bookings {
  @PrimaryGeneratedColumn()
  bookingId: number;

  @ManyToOne((type) => Hotel, hotel => hotel.bookings)
  @JoinColumn()
  hotel: Hotel;

  @ManyToOne((type) => Guest, guest => guest.bookings)
  @JoinColumn()
  guest: Guest;

  @ManyToOne((type) => ReservationAgent, reservationAgent => reservationAgent.bookings)
  @JoinColumn()
  reservationAgent: ReservationAgent;

  @Column()
  dateFrom: string;
  
  @Column()
  dateTo: string;

  @Column()
  roomCount: number

  @ManyToOne((type) => BookingStatus, bookingStatus => bookingStatus.bookings)
  @JoinColumn()
  bookingStatus: BookingStatus
}
