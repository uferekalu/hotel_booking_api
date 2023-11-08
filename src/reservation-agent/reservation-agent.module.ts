import { Module } from '@nestjs/common';
import { ReservationAgentController } from './reservation-agent.controller';
import { ReservationAgentService } from './reservation-agent.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReservationAgent } from 'src/entities/reservationAgent.entity';
import { Bookings } from 'src/entities/bookings.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ReservationAgent, Bookings])],
  controllers: [ReservationAgentController],
  providers: [ReservationAgentService],
})
export class ReservationAgentModule {}
