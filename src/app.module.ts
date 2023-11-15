import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostgresProviderModule } from './provider/database/postgres/provider.module';
import { UserModule } from './module/user/user.module';
import { AuthModule } from './auth/auth.module';
import { StatusModule } from './module/status/status.module';
import { TaskModule } from './module/task/task.module';
import { MongodbProviderModule } from './provider/database/mongodb/provider.module';

@Module({
  imports: [
    PostgresProviderModule,
    MongodbProviderModule,
    UserModule,
    AuthModule,
    StatusModule,
    TaskModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
