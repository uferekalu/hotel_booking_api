import { Test, TestingModule } from '@nestjs/testing';
import { ReservationAgentController } from './reservation-agent.controller';

describe('ReservationAgentController', () => {
  let controller: ReservationAgentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReservationAgentController],
    }).compile();

    controller = module.get<ReservationAgentController>(ReservationAgentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
