import { Test, TestingModule } from '@nestjs/testing';
import { BookingStatusController } from './booking-status.controller';

describe('BookingStatusController', () => {
  let controller: BookingStatusController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BookingStatusController],
    }).compile();

    controller = module.get<BookingStatusController>(BookingStatusController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
