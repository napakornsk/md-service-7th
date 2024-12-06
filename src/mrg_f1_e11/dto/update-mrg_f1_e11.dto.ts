import { PartialType } from '@nestjs/mapped-types';
import { CreateMrgF1E11Dto } from './create-mrg_f1_e11.dto';

export class UpdateMrgF1E11Dto extends PartialType(CreateMrgF1E11Dto) {}
