import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateTaskDTO } from './dto/create-task.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { TaskEntity } from 'src/model/postgres/task.entity';
import { Repository } from 'typeorm';
import { StatusEntity } from 'src/model/postgres/status.entity';
import { UserEnity } from 'src/model/postgres/user.entity';
import { TaskListFilterDTO } from './dto/task-list-filter.dto';
import { AssignMembersTaskDTO } from './dto/assign-members-task.dto';
import { func } from 'joi';
import { MemberDTO } from './dto/member.dto';
import { LogService } from 'src/log/log.service';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(TaskEntity)
    private readonly taskRepo: Repository<TaskEntity>,
  ) {}

  async createTask(source: CreateTaskDTO, userId: string): Promise<TaskEntity> {
    const newTask: TaskEntity = new TaskEntity();

    newTask.title = source.title;
    newTask.description = source.description;
    newTask.statusId = source.statusId;
    newTask.createdBy = {
      id: userId,
    } as UserEnity;

    const task = await this.taskRepo.save(newTask);
    return task;
  }

  async taskList(filter: TaskListFilterDTO): Promise<any> {
    let tasks = await this.taskRepo
      .createQueryBuilder('task')
      .leftJoin('task.status', 's')
      .addSelect(['s.id', 's.label'])
      .leftJoin('task.members', 'm')
      .addSelect(['m.id', 'm.firstname', 'm.lastname']);
    // .getMany();

    // where
    tasks.where(`task.title like :title and task.description like :desc`, {
      title: `%${filter.title}%`,
      desc: `%${filter.description}%`,
    });

    if (filter.dateStart)
      tasks.andWhere(`DATE_TRUNC('day',task.created_on) >= :start`, {
        start: filter.dateStart,
      });

    if (filter.dateEnd)
      tasks.andWhere(`DATE_TRUNC('day',task.created_on) <= :end`, {
        end: filter.dateEnd,
      });

    // tasks.getMany();

    return tasks.getMany();
  }

  async assignMembersToTask(source: AssignMembersTaskDTO) {
    const task = await this.taskRepo.findOne({ where: { id: source.taskId } });

    if (!task) {
      throw new BadRequestException();
    }

    task.members = source.members.map((m) => ({ id: m.id }) as UserEnity);

    this.taskRepo.save(task);
  }
}
