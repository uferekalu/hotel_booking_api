import { Module } from '@nestjs/common';
import { GuestsService } from './guests.service';
import { GuestsController } from './guests.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Guest } from 'src/entities/guest.entity';
import { Bookings } from 'src/entities/bookings.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Guest, Bookings])],
  providers: [GuestsService],
  controllers: [GuestsController],
})
export class GuestsModule {}
