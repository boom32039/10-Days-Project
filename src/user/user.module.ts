import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, JoinTable, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';


@Module({
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {
//  @PrimaryGeneratedColumn()
 // id: number;
//  @Column()
//  name: string;
 // @Column()
//  unitsSold: number;
 // @Column()
//  picture : string;
 // @DeleteDateColumn()
 // deleted_at: string;

//  @UpdateDateColumn()
//  updated_at: string;

//  @CreateDateColumn()
//  created_at: string;

}
