import { MemberDTO } from './member.dto';
import { IsArray, IsUUID } from 'class-validator';

export class AssignMembersTaskDTO {
  @IsUUID()
  taskId: string;

  @IsArray()
  members: MemberDTO[];
}
