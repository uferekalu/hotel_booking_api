import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Guest } from 'src/entities/guest.entity';
import { Repository } from 'typeorm';
import { CreateGuestDto } from './dto/createGuestDto';

@Injectable()
export class GuestsService {
  constructor(
    @InjectRepository(Guest)
    private readonly guestRepository: Repository<Guest>,
  ) {}

  async findOne(guestId: number) {
    return await this.guestRepository.findOne({ where: { guestId: guestId } });
  }

  async create(createGuestDto: CreateGuestDto) {
    const guest = await this.guestRepository.create(createGuestDto);
    return await this.guestRepository.save(guest);
  }

  async findAll(): Promise<Array<Guest>> {
    return await this.guestRepository.find({});
  }
}
