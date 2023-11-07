import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostgresConfigModule } from 'src/config/database/postgres/config.module';
import { PostgresConfigService } from 'src/config/database/postgres/config.service';
import { StatusEntity } from 'src/model/postgres/status.entity';
import { TaskEntity } from 'src/model/postgres/task.entity';
import { UserEnity } from 'src/model/postgres/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [PostgresConfigModule],
      useFactory: (postgresConfigService: PostgresConfigService) => ({
        type: 'postgres',
        host: postgresConfigService.host,
        port: postgresConfigService.port,
        username: postgresConfigService.user,
        password: postgresConfigService.password,
        database: postgresConfigService.database,
        synchronize: true,
        entities: [UserEnity, StatusEntity, TaskEntity],
      }),
      inject: [PostgresConfigService],
    }),
  ],
  exports: [TypeOrmModule],
})
export class PostgresProviderModule {}
