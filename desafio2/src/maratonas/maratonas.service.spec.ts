import { Test, TestingModule } from '@nestjs/testing';
import { MaratonasService } from './maratonas.service';

describe('MaratonasService', () => {
  let service: MaratonasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MaratonasService],
    }).compile();

    service = module.get<MaratonasService>(MaratonasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
