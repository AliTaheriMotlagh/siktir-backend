import { Test, TestingModule } from '@nestjs/testing';
import { SiktirController } from './siktir.controller';

describe('SiktirController', () => {
  let controller: SiktirController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SiktirController],
    }).compile();

    controller = module.get<SiktirController>(SiktirController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
