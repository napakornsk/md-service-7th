import { Test, TestingModule } from '@nestjs/testing';
import { MrgF1E11Service } from './mrg_f1_e11.service';

describe('MrgF1E11Service', () => {
  let service: MrgF1E11Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MrgF1E11Service],
    }).compile();

    service = module.get<MrgF1E11Service>(MrgF1E11Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
