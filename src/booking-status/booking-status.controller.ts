import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { BookingStatusService } from './booking-status.service';
import { CreateBookingStatusDto } from './dto/createBookingStatusDto';
import { BookingStatus } from 'src/entities/bookingStatus.entity';

@Controller('booking-status')
export class BookingStatusController {
  constructor(private readonly bookingStatusService: BookingStatusService) {}

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.bookingStatusService.findOne(id);
  }

  @Post()
  create(@Body() createBookingStatusDto: CreateBookingStatusDto) {
    return this.bookingStatusService.create(createBookingStatusDto);
  }

  @Get()
  findAll(): Promise<Array<BookingStatus>> {
    return this.bookingStatusService.findAll();
  }
}
