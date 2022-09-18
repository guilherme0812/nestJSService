/* eslint-disable prettier/prettier */
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private repo: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto) {
   const user = this.repo.create({
     firstName: createUserDto.firstName,
     lastName: createUserDto.lastName,
     active: true,
   })
   await this.repo.insert(user)

   return user
  }

  async findAll() {
    return await this.repo.find()
  }

  findOne(id: string) {
    return this.repo.findOneBy({id})
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const user =  await this.repo.findOneBy({id})

    user.firstName = updateUserDto.firstName,
    user.lastName = updateUserDto.lastName,
    user.active = updateUserDto.active

    this.repo.save(user)
  }

  async remove(id: string) {
    const user = await  this.repo.findOneBy({id})
    return this.repo.remove(user)

  }
}
