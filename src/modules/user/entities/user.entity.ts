/* eslint-disable prettier/prettier */
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Photo } from "src/modules/photo/entities/photo.entity";

@Entity('users')
export class User {
 @PrimaryGeneratedColumn('uuid')
 id: string

 @Column()
 firstName:string

 @Column()
 lastName: string

 @Column({type: Boolean})
 active:boolean

 @OneToMany(() => Photo, (photo) => photo.user, {eager:true, cascade: true})
 photos: Photo[]
}
