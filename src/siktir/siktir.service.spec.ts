import { Test, TestingModule } from '@nestjs/testing';
import { SiktirService } from './siktir.service';

describe('SiktirService', () => {
  let service: SiktirService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SiktirService],
    }).compile();

    service = module.get<SiktirService>(SiktirService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
