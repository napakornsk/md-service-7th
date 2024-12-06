import { Module } from '@nestjs/common';
import { MrgF1E11Service } from './mrg_f1_e11.service';
import { MrgF1E11Controller } from './mrg_f1_e11.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MrgF1E11 } from './entities/mrg_f1_e11.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([MrgF1E11]), // Register your entity here
  ],
  controllers: [MrgF1E11Controller],
  providers: [MrgF1E11Service],
  exports: [TypeOrmModule],
})
export class MrgF1E11Module {}
