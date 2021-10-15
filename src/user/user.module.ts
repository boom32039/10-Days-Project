import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, JoinTable, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from 'src/order/entities/order.entity';
import { User } from './entities/user.entity';
import { Product } from 'src/product/entities/product.entity';


@Module({
  imports: [TypeOrmModule.forFeature([Order, User, Product])],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {

}
