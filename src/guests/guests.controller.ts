import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { GuestsService } from './guests.service';
import { CreateGuestDto } from './dto/createGuestDto';
import { Guest } from 'src/entities/guest.entity';

@Controller('guests')
export class GuestsController {
  constructor(private readonly guestService: GuestsService) {}

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.guestService.findOne(id);
  }

  @Post()
  create(@Body() createGuestDto: CreateGuestDto) {
    return this.guestService.create(createGuestDto);
  }

  @Get()
  findAll(): Promise<Array<Guest>> {
    return this.guestService.findAll();
  }
}
