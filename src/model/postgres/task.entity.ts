import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { StatusEntity } from './status.entity';
import { UserEnity } from './user.entity';

@Entity({ name: 'task' })
export class TaskEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column({ name: 'status_id', nullable: true })
  statusId: string;

  @ManyToOne(() => StatusEntity, (statusEntity) => statusEntity.tasks)
  @JoinColumn({ name: 'status_id' })
  @Index()
  status: StatusEntity;

  @ManyToOne(() => UserEnity, (userEnity) => userEnity.createdTasks)
  @JoinColumn({ name: 'created_by' })
  @Index()
  createdBy: UserEnity;

  @ManyToMany(() => UserEnity, (userEntity) => userEntity.tasks)
  @JoinTable({ name: 'task_user' })
  members: UserEnity[];

  @CreateDateColumn({ name: 'created_on', type: 'timestamp' })
  createdOn: Date;

  @UpdateDateColumn({ name: 'updated_on', type: 'timestamp' })
  updatedOn: Date;
}
