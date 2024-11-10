import { PartialType } from '@nestjs/mapped-types';
import { CreateSystemApiDto } from './create-system-api.dto';

export class UpdateSystemApiDto extends PartialType(CreateSystemApiDto) {}
