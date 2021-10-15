import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from 'src/product/entities/product.entity';
import { User } from 'src/user/entities/user.entity';
import { Order } from './entities/order.entity';
import { OrderController } from './order.controller';
import { OrderService } from './order.service';

@Module({
   imports: [TypeOrmModule.forFeature([Order, User, Product])],
   controllers: [OrderController],
   providers: [OrderService],
})
export class OrderModule {}
