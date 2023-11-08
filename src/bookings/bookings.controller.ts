import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  ParseIntPipe,
} from '@nestjs/common';
import { BookingsService } from './bookings.service';
import { Bookings } from 'src/entities/bookings.entity';
import { CreateBookingDto } from './dto/createBookingDto';

@Controller('bookings')
export class BookingsController {
  constructor(private readonly bookingsService: BookingsService) {}

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.bookingsService.findOne(id);
  }

  @Post(':hotelID/:guestId/:reservationAgentId/:bookingStatusID')
  async create(
    @Param('hotelID', ParseIntPipe) hotelID: number,
    @Param('guestId', ParseIntPipe) guestId: number,
    @Param('reservationAgentId', ParseIntPipe) reservationAgentId: number,
    @Param('bookingStatusID', ParseIntPipe) bookingStatusID: number,
    @Body() createBookingDto: CreateBookingDto,
  ) {
    return await this.bookingsService.create(
      hotelID,
      guestId,
      reservationAgentId,
      bookingStatusID,
      createBookingDto,
    );
  }

  @Get()
  findAll(): Promise<Array<Bookings>> {
    return this.bookingsService.findAll();
  }
}
