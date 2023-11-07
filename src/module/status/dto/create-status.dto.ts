import { IsNotEmpty, IsString } from 'class-validator';

export class CreateStatusDTO {
  @IsNotEmpty()
  @IsString()
  label: string;
}
