import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { Order } from './entities/order.entity';

@Injectable()
export class OrderService {
   constructor(@InjectRepository(Order) private readonly orderRepository: Repository<Order>) {}
   create(createOrderDto: CreateOrderDto) {
      return 'This action adds a new order';
   }

   async findAll() {
      return await this.orderRepository.find({
         select: ['id', 'amount', 'isPaymentDone', 'paymentDate'],
         relations: ['product','buyer','seller'],
      });
      // return `This action returns all order`;
   }

   async findOne(id: number) {
      let order: Order;
      try {
         return await this.orderRepository.findOneOrFail(id);
      } catch (err) {
         throw new HttpException('Not Found ' + err, HttpStatus.NOT_FOUND);
      }
      // const { deleted_at, created_at, updated_at, ...result } = order.product;
      // return result;
   }

   async update(id: number, updateOrderDto: UpdateOrderDto) {
      return await this.orderRepository.update(id, updateOrderDto);
   }

   async remove(id: number) {
      return await this.orderRepository.softDelete(id);`This action removes a #${id} order`;
   }
}
