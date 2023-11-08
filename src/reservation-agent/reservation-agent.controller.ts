import { Controller, Get, Body, Param, Post } from '@nestjs/common';
import { ReservationAgentService } from './reservation-agent.service';
import { ReservationAgentDto } from './dto/reservationAgentDto';
import { ReservationAgent } from 'src/entities/reservationAgent.entity';

@Controller('reservation-agent')
export class ReservationAgentController {
  constructor(
    private readonly reservationAgentService: ReservationAgentService,
  ) {}

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.reservationAgentService.findOne(id);
  }

  @Post()
  create(@Body() reservationAgentDto: ReservationAgentDto) {
    return this.reservationAgentService.create(reservationAgentDto);
  }

  @Get()
  findAll(): Promise<Array<ReservationAgent>> {
    return this.reservationAgentService.findAll();
  }
}
