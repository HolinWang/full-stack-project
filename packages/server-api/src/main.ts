import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { generateDocument } from './doc';
import {ValidationPipe} from "@nestjs/common";
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // 添加数据校验 pipe全局管道
  app.useGlobalPipes(new ValidationPipe());

  // create swagger document
  generateDocument(app);


  await app.listen(3000);
}
bootstrap();
