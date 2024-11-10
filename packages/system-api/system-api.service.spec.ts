import { Test, TestingModule } from '@nestjs/testing';
import { SystemApiService } from './system-api.service';

describe('SystemApiService', () => {
  let service: SystemApiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SystemApiService],
    }).compile();

    service = module.get<SystemApiService>(SystemApiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
