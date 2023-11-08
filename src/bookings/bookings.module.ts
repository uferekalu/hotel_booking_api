import { Module } from '@nestjs/common';
import { BookingsController } from './bookings.controller';
import { BookingsService } from './bookings.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Bookings } from 'src/entities/bookings.entity';
import { ReservationAgent } from 'src/entities/reservationAgent.entity';
import { BookingStatus } from 'src/entities/bookingStatus.entity';
import { Hotel } from 'src/entities/hotel.entity';
import { Guest } from 'src/entities/guest.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Bookings,
      ReservationAgent,
      BookingStatus,
      Hotel,
      Guest,
    ]),
  ],
  controllers: [BookingsController],
  providers: [BookingsService],
})
export class BookingsModule {}
