import { Module } from '@nestjs/common';
import { BookingStatusController } from './booking-status.controller';
import { BookingStatusService } from './booking-status.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookingStatus } from 'src/entities/bookingStatus.entity';
import { Bookings } from 'src/entities/bookings.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BookingStatus, Bookings])],
  controllers: [BookingStatusController],
  providers: [BookingStatusService],
})
export class BookingStatusModule {}
