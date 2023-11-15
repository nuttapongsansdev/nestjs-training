import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MongodbConfigModule } from 'src/config/database/mongodb/config.module';
import { MongodbConfigService } from 'src/config/database/mongodb/config.service';
import { LogEntity } from 'src/model/mongodb/log.entity';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      name: 'mongodb',
      imports: [MongodbConfigModule],
      useFactory: (mongodbConfigService: MongodbConfigService) => ({
        type: 'mongodb',
        url: mongodbConfigService.url,
        database: mongodbConfigService.database,
        synchronize: true,
        entities: [LogEntity],
      }),
      inject: [MongodbConfigService],
    }),
  ],
  exports: [TypeOrmModule],
})
export class MongodbProviderModule {}
