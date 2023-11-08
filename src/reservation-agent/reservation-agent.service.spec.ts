import { Test, TestingModule } from '@nestjs/testing';
import { ReservationAgentService } from './reservation-agent.service';

describe('ReservationAgentService', () => {
  let service: ReservationAgentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ReservationAgentService],
    }).compile();

    service = module.get<ReservationAgentService>(ReservationAgentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
