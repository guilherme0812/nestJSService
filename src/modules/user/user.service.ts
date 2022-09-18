/* eslint-disable prettier/prettier */
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { PhotoService } from '../photo/photo.service';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private repo: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto, photoService: PhotoService) {

    if (createUserDto.password !== createUserDto.confirm) {
      return HttpStatus.BAD_REQUEST
    }

    const user = this.repo.create({
      email: createUserDto.email,
      password: createUserDto.password,
      active: true,
    });

    await this.repo.insert(user);

    createUserDto.photos.map((d) => {
      console.log(user)
      photoService.create({
        url: d.url,
        user: user,
      });
    });

    return user;
  }

  async findAll() {
    return await this.repo.find();
  }

  findOne(id: string) {
    return this.repo.findOneBy({ id });
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const user = await this.repo.findOneBy({ id });

    user.active = updateUserDto.active;

    this.repo.save(user);
  }

  async remove(id: string) {
    const user = await this.repo.findOneBy({ id });
    return this.repo.remove(user);
  }
}
