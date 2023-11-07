import { Injectable } from '@nestjs/common';
import { CreateTaskDTO } from './dto/create-task.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { TaskEntity } from 'src/model/postgres/task.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(TaskEntity)
    private readonly taskRepo: Repository<TaskEntity>,
  ) {}

  async createTask(source: CreateTaskDTO): Promise<TaskEntity> {
    const task = await this.taskRepo.save({
      title: source.title,
      description: source.description,
    });
    return task;
  }
}
