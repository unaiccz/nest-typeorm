import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { json } from 'express';
import { LoggerInterceptor } from './utiils/logger/logger.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {cors: true});
  app.use(json({
      limit: '200mb'
    }
  ))
  app.useGlobalInterceptors(new LoggerInterceptor())
  //swagger   */*
  
  const config = new DocumentBuilder()
    .setTitle('Cats example')
    .setDescription('The videos API description')
    .setVersion('1.0')
    .addTag('videos')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  //  linea para aplicar las validaciones a toda la **app**
  app.useGlobalPipes(new ValidationPipe())
  await app.listen(3000);
}
bootstrap();
