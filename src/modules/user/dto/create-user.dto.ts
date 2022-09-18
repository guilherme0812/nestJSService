/* eslint-disable prettier/prettier */
import { IsArray, IsNotEmpty, Length } from 'class-validator';
import { Photo } from 'src/modules/photo/entities/photo.entity';

export class CreateUserDto {
  @IsNotEmpty({ message: 'firstName não pode ser nulo' })
  @Length(2, 255)
  firstName: string;

  @IsNotEmpty({ message: 'lastName não pode ser nulo' })
  @Length(2, 255)
  lastName: string;

  @IsArray({message: 'Photos deve conter um array'})
  photos: Photo[]
}
