import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ReservationAgent } from 'src/entities/reservationAgent.entity';
import { Repository } from 'typeorm';
import { ReservationAgentDto } from './dto/reservationAgentDto';

@Injectable()
export class ReservationAgentService {
  constructor(
    @InjectRepository(ReservationAgent)
    private readonly reservationAgent: Repository<ReservationAgent>,
  ) {}

  async findOne(reservationAgentId: number) {
    return await this.reservationAgent.findOne({
      where: { reservationAgentId: reservationAgentId },
    });
  }

  async create(reservationAgentDto: ReservationAgentDto) {
    const data = await this.reservationAgent.create(reservationAgentDto);
    return await this.reservationAgent.save(data);
  }

  async findAll(): Promise<Array<ReservationAgent>> {
    return this.reservationAgent.find({});
  }
}
