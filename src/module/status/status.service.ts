import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { StatusEntity } from 'src/model/postgres/status.entity';
import { Repository } from 'typeorm';
import { CreateStatusDTO } from './dto/create-status.dto';

@Injectable()
export class StatusService {
  constructor(
    @InjectRepository(StatusEntity)
    private readonly statusRepo: Repository<StatusEntity>,
  ) {}

  async createStatus(source: CreateStatusDTO): Promise<StatusEntity> {
    const status = await this.statusRepo.save({ label: source.label });
    return status;
  }
}
