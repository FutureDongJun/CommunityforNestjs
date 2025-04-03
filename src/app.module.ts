import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as path from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './res/src/user.module';

@Module({
  imports: [TypeOrmModule.forRootAsync({
    useFactory: () => ({
      retryAttempts: 10, //연결 재시도 횟수
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      database: 'myhomepage',
      username: 'root',
      password: '0000',
      entities: [
        path.join(__dirname, '/entities/**/*.entity.{js, ts}'),
      ],
      synchronize: false,
      logging: true,
      timezone: 'local',
    })
  }),
    UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
