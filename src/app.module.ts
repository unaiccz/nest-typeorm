import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VideosModule } from './videos/videos.module';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    //  typeorm*-* connection
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '011110',
      database: 'nest',
      entities: [
        __dirname + './**/**/*.entity{.ts,.js}',
      ],
      autoLoadEntities: true,
      synchronize: true,
    }),
    ConfigModule.forRoot({

      isGlobal: true
    }),  
    VideosModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),
  
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
