import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MrgF1E11Service } from './mrg_f1_e11.service';
import { CreateMrgF1E11Dto } from './dto/create-mrg_f1_e11.dto';
import { UpdateMrgF1E11Dto } from './dto/update-mrg_f1_e11.dto';

@Controller('mrg-f1-e11')
export class MrgF1E11Controller {
  constructor(private readonly mrgF1E11Service: MrgF1E11Service) {}

  @Post()
  create(@Body() createMrgF1E11Dto: CreateMrgF1E11Dto) {
    return this.mrgF1E11Service.create(createMrgF1E11Dto);
  }

  @Get()
  findAll() {
    return this.mrgF1E11Service.findAll();
  }

  @Get(':mrg_number')
  findOne(@Param('mrg_number') mrg_number: string) {
    return this.mrgF1E11Service.findOne(mrg_number);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMrgF1E11Dto: UpdateMrgF1E11Dto) {
    return this.mrgF1E11Service.update(+id, updateMrgF1E11Dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mrgF1E11Service.remove(+id);
  }
}
