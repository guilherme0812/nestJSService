/* eslint-disable prettier/prettier */
import {
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  BeforeInsert,
} from 'typeorm';
import { Photo } from '../../photo/entities/photo.entity';
import * as bcrypt from 'bcrypt'

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ type: Boolean })
  active: boolean;

  @Column({nullable: true})
  fullName: string

  @OneToMany(() => Photo, (photo) => photo.user, { eager: true, cascade: true })
  photos: Photo[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @BeforeInsert()
  async setPassword(password: string) {
    const salth = await bcrypt.genSalt()
    this.password = await bcrypt.hash(password || this.password, salth)
  }
}
