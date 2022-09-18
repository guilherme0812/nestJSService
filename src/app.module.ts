/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { typeormconfigAsync } from './config/typeorm.config';
import { UserModule } from './modules/user/user.module';
import { PhotoModule } from './modules/photo/photo.module';
import { CarModule } from './modules/car/car.module';

@Module({
  imports: [
    UserModule,
    TypeOrmModule.forRootAsync(typeormconfigAsync),
    PhotoModule,
    CarModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
