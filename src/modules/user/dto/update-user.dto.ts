/* eslint-disable prettier/prettier */
import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { IsNotEmpty } from "class-validator";


export class UpdateUserDto extends PartialType(CreateUserDto) {
 @IsNotEmpty({message: "É necessário enviar id"})
 active?:boolean
}
