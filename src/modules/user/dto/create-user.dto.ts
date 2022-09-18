/* eslint-disable prettier/prettier */
import { IsArray, IsEmail, IsNotEmpty, Length, Matches } from 'class-validator';
import { Photo } from 'src/modules/photo/entities/photo.entity';
import { MESSAGES, passwordRule } from 'src/utils';

export class CreateUserDto {

  @IsNotEmpty()
  @IsEmail()
  email: string

  @IsNotEmpty()
  @Length(8, 24)
  @Matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).{6,24}$/gm, {
    message:
      MESSAGES.PASSWORD_RULE_MESSAGE,
  })
  password: string
  
  @IsNotEmpty()
  @Length(8, 24)
  @Matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).{6,24}$/gm)
  confirm: string

  @IsArray({message: 'Photos deve conter um array'})
  photos: Photo[]
}
