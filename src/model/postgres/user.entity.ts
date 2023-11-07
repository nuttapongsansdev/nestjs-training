import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToMany,
  OneToMany,
} from 'typeorm';
import { TaskEntity } from './task.entity';

@Entity({ name: 'user' })
export class UserEnity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  firstname: string;

  @Column()
  lastname: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @ManyToMany(() => TaskEntity, (taskEntity) => taskEntity.members)
  tasks: TaskEntity[];

  @OneToMany(() => TaskEntity, (taskEntity) => taskEntity.createdBy)
  createdTasks: TaskEntity[];

  @CreateDateColumn({ name: 'created_on', type: 'timestamp' })
  createdOn: Date;

  @UpdateDateColumn({ name: 'updated_on', type: 'timestamp' })
  updatedOn: Date;
}
