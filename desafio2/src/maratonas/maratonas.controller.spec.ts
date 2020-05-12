import { Test, TestingModule } from '@nestjs/testing';
import { MaratonasController } from './maratonas.controller';

describe('Maratonas Controller', () => {
  let controller: MaratonasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MaratonasController],
    }).compile();

    controller = module.get<MaratonasController>(MaratonasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
