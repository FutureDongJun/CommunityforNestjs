import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as path from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './res/src/user.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { ArticleModule } from './res/article/article.module';

console.log(`.env.${process.env.NODE_ENV}`);

@Module({
  imports: [ConfigModule.forRoot({
    envFilePath: `.env.${process.env.NODE_ENV}`,
    isGlobal: true,
  }),

  TypeOrmModule.forRootAsync({
    inject: [ConfigService],
    useFactory: (configService: ConfigService) => ({
      retryAttempts: configService.get('NODE_ENV') === 'prod' ? 10: 1, //연결 재시도 횟수
      type: 'mysql',
      host: configService.get('DB_HOST'),
      port: Number(configService.get('DB_NAME')),
      database: configService.get('DB_NAME'),
      username: configService.get('DB_USER'),
      password: configService.get('DB_PASSWORD'),
      entities: [
        path.join(__dirname, '/entities/**/*.entity.{js, ts}'),
      ],
      synchronize: false,
      logging: true,
      timezone: 'local',
    })
  }),
    UserModule,
    AuthModule,
    ArticleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
