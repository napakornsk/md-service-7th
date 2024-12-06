import { Test, TestingModule } from '@nestjs/testing';
import { MrgF1E11Controller } from './mrg_f1_e11.controller';
import { MrgF1E11Service } from './mrg_f1_e11.service';

describe('MrgF1E11Controller', () => {
  let controller: MrgF1E11Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MrgF1E11Controller],
      providers: [MrgF1E11Service],
    }).compile();

    controller = module.get<MrgF1E11Controller>(MrgF1E11Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
