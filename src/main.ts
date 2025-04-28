import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { HttpExceptionFilter } from './filter/http-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new HttpExceptionFilter);

  const options = new DocumentBuilder()
  .setTitle('API 문서 제목')
  .setDescription('API 문서 설명')
  .setVersion('0.0.1')
  .addBearerAuth()
  .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api-docs', app, document); // 'api-docs'는 swagger 문서로 접속할 url임
  

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
