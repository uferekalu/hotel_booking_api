import { Module } from '@nestjs/common';
import { HotelsController } from './hotels.controller';
import { HotelsService } from './hotels.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Hotel } from 'src/entities/hotel.entity';
import { Bookings } from 'src/entities/bookings.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Hotel, Bookings])],
  controllers: [HotelsController],
  providers: [HotelsService],
})
export class HotelsModule {}
