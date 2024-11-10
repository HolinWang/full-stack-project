import { Test, TestingModule } from '@nestjs/testing';
import { SystemApiController } from './system-api.controller';
import { SystemApiService } from './system-api.service';

describe('SystemApiController', () => {
  let controller: SystemApiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SystemApiController],
      providers: [SystemApiService],
    }).compile();

    controller = module.get<SystemApiController>(SystemApiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
