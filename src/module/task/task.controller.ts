import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Request,
} from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDTO } from './dto/create-task.dto';
import { JwtAuthGuard } from 'src/auth/jwt/jwt-auth.guard';
import { TaskListFilterDTO } from './dto/task-list-filter.dto';
import { AssignMembersTaskDTO } from './dto/assign-members-task.dto';
import { ApiBearerAuth } from '@nestjs/swagger';
import { LogService } from 'src/log/log.service';

@ApiBearerAuth()
@Controller('task')
export class TaskController {
  constructor(
    private readonly taskService: TaskService,
    private readonly logger: LogService,
  ) {}

  @UseGuards(JwtAuthGuard)
  @Post('/create')
  create(@Body() body: CreateTaskDTO, @Request() req) {
    return this.taskService.createTask(body, req.user.id);
  }

  @UseGuards(JwtAuthGuard)
  @Post('/list')
  async taskList(@Request() req, @Body() body: TaskListFilterDTO) {
    this.logger.info(body);
    const tasks = await this.taskService.taskList(body);
    return tasks;
  }

  @UseGuards(JwtAuthGuard)
  @Post('/assign_members')
  async assignMembersToTask(@Body() body: AssignMembersTaskDTO) {
    const tasks = await this.taskService.assignMembersToTask(body);
    return tasks;
  }
}
