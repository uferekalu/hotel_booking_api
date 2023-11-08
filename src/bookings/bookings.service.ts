import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Bookings } from 'src/entities/bookings.entity';
import { Repository } from 'typeorm';
import { CreateBookingDto } from './dto/createBookingDto';
import { Hotel } from 'src/entities/hotel.entity';
import { Guest } from 'src/entities/guest.entity';
import { ReservationAgent } from 'src/entities/reservationAgent.entity';
import { BookingStatus } from 'src/entities/bookingStatus.entity';

@Injectable()
export class BookingsService {
  constructor(
    @InjectRepository(Bookings)
    private readonly bookingRepository: Repository<Bookings>,
    @InjectRepository(Hotel)
    private readonly hotelRepository: Repository<Hotel>,
    @InjectRepository(Guest)
    private readonly guestRepository: Repository<Guest>,
    @InjectRepository(ReservationAgent)
    private readonly reservationAgentRepository: Repository<ReservationAgent>,
    @InjectRepository(BookingStatus)
    private readonly bookingStatusRepository: Repository<BookingStatus>,
  ) {}

  async findOne(bookingId: number) {
    return this.bookingRepository.findOne({
      where: { bookingId: bookingId },
      relations: ['hotel', 'guest', 'reservationAgent', 'bookingStatus'],
    });
  }

  async create(
    hotelID: number,
    guestId: number,
    reservationAgentId: number,
    bookingStatusID: number,
    createBookingDto: CreateBookingDto,
  ) {
    const hotel = await this.hotelRepository.findOneBy({ hotelID });
    const guest = await this.guestRepository.findOneBy({ guestId });
    const reservationAgent = await this.reservationAgentRepository.findOneBy({
      reservationAgentId,
    });
    const bookingStatus = await this.bookingStatusRepository.findOneBy({
      bookingStatusID,
    });

    if (!hotel) {
      throw new HttpException(
        'Hotel not found. Cannot create bookings!',
        HttpStatus.BAD_REQUEST,
      );
    }

    if (!guest) {
      throw new HttpException(
        'Guest not found. Cannot create bookings!',
        HttpStatus.BAD_REQUEST,
      );
    }

    if (!reservationAgent) {
      throw new HttpException(
        'Reservation Agent not found. Cannot create bookings!',
        HttpStatus.BAD_REQUEST,
      );
    }

    if (!bookingStatus) {
      throw new HttpException(
        'Booking status not found. Cannot create bookings!',
        HttpStatus.BAD_REQUEST,
      );
    }

    const newBooking = this.bookingRepository.create({
      ...createBookingDto,
      hotel,
      guest,
      reservationAgent,
      bookingStatus,
    });

    return await this.bookingRepository.save(newBooking);
  }

  async findAll(): Promise<Array<Bookings>> {
    return this.bookingRepository.find({});
  }
}
