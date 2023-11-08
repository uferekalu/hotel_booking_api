/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Bookings } from './bookings.entity';

@Entity()
export class Guest {
  @PrimaryGeneratedColumn()
  guestId: number;

  @Column({ nullable: false })
  firstName: string;

  @Column({ nullable: false })
  lastName: string;

  @Column({ nullable: false })
  address: string;
  
  @Column()
  address2: string;

  @Column()
  city: string

  @Column()
  state: string

  @Column()
  zipCode: string

  @Column()
  country: string

  @Column({ unique: true, nullable: false })
  homePhoneNumber: string

  @Column({ unique: true, nullable: false })
  email: string

  @Column()
  gender: string

  @OneToMany((type) => Bookings, booking => booking.guest)
  @JoinColumn()
  bookings: Bookings[]
}
