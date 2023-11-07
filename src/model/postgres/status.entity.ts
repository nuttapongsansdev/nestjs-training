import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { TaskEntity } from './task.entity';

@Entity({ name: 'status' })
export class StatusEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  label: string;

  @OneToMany(() => TaskEntity, (taskEntity) => taskEntity.status)
  tasks: TaskEntity[];

  @CreateDateColumn({ name: 'created_on', type: 'timestamp' })
  createdOn: Date;

  @UpdateDateColumn({ name: 'updated_on', type: 'timestamp' })
  updatedOn: Date;
}
