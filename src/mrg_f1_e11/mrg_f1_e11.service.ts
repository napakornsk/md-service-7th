import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMrgF1E11Dto } from './dto/create-mrg_f1_e11.dto';
import { UpdateMrgF1E11Dto } from './dto/update-mrg_f1_e11.dto';
import { MrgF1E11 } from './entities/mrg_f1_e11.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class MrgF1E11Service {
  constructor(
    @InjectRepository(MrgF1E11)
    private readonly repo: Repository<MrgF1E11>,
  ) {}

  create(createMrgF1E11Dto: CreateMrgF1E11Dto) {
    return 'This action adds a new mrgF1E11';
  }

  findAll() {
    return `This action returns all mrgF1E11`;
  }

  async findOne(mrg_number: string) {
    const data: MrgF1E11 | null = await this.repo.findOne({where: {mrg_number}});
    if (data == null) {
      throw new NotFoundException(`detail with mrg_number: ${mrg_number} was not found`)
    }
    return data;
  }

  update(id: number, updateMrgF1E11Dto: UpdateMrgF1E11Dto) {
    return `This action updates a #${id} mrgF1E11`;
  }

  remove(id: number) {
    return `This action removes a #${id} mrgF1E11`;
  }
}
