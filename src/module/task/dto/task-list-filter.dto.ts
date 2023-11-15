import { IsUUID, IsDate, IsString } from 'class-validator';

export class TaskListFilterDTO {
  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsUUID()
  status: string;

  @IsDate()
  dateStart: Date;

  @IsDate()
  dateEnd: Date;
}
