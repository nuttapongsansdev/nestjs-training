import { MemberTask } from './member-task.dto';

export class CreateTaskDTO {
  title: string;
  description: string;
  members: MemberTask[];
}
