import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BookingStatus } from 'src/entities/bookingStatus.entity';
import { Repository } from 'typeorm';
import { CreateBookingStatusDto } from './dto/createBookingStatusDto';

@Injectable()
export class BookingStatusService {
  constructor(
    @InjectRepository(BookingStatus)
    private readonly bookingStatusRepository: Repository<BookingStatus>,
  ) {}

  async findOne(bookingStatusID: number) {
    return await this.bookingStatusRepository.findOne({
      where: { bookingStatusID: bookingStatusID },
    });
  }

  async create(createBookingStatusDto: CreateBookingStatusDto) {
    const data = await this.bookingStatusRepository.create(
      createBookingStatusDto,
    );
    return await this.bookingStatusRepository.save(data);
  }

  async findAll(): Promise<Array<BookingStatus>> {
    return this.bookingStatusRepository.find({});
  }
}
