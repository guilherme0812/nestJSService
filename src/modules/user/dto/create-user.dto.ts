/* eslint-disable prettier/prettier */
import { IsArray, IsEmail, IsNotEmpty, Length, Matches } from 'class-validator';
import { Photo } from 'src/modules/photo/entities/photo.entity';

export class CreateUserDto {

  @IsNotEmpty()
  @IsEmail()
  email: string

  @IsNotEmpty()
  @Length(8, 24)
  @Matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).{6,64}$/gm, {
    message:
      'Password must be between 6 and 64 characters long with 1 special character and capital character each',
  })
  password: string
  
  @IsNotEmpty()
  @Length(8, 24)
  @Matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).{6,64}$/gm, {
    message:
      'Password must be between 6 and 64 characters long with 1 special character and capital character each',
  })
  confirm: string

  @IsArray({message: 'Photos deve conter um array'})
  photos: Photo[]
}
