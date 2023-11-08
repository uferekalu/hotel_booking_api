import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Hotel } from 'src/entities/hotel.entity';
import { Repository } from 'typeorm';
import { CreateHotelDto } from './dto/createHotelDto';

@Injectable()
export class HotelsService {
  constructor(
    @InjectRepository(Hotel)
    private readonly hotelRepository: Repository<Hotel>,
  ) {}

  async findOne(hotelID: number) {
    return await this.hotelRepository.findOne({ where: { hotelID: hotelID } });
  }

  async create(createHotelDto: CreateHotelDto) {
    const data = await this.hotelRepository.create(createHotelDto);
    return await this.hotelRepository.save(data);
  }

  async findAll(): Promise<Array<Hotel>> {
    return this.hotelRepository.find();
  }
}
