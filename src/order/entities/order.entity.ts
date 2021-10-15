import { Product } from 'src/product/entities/product.entity';
import { User } from 'src/user/entities/user.entity';
import {
   Column,
   CreateDateColumn,
   DeleteDateColumn,
   Entity,
   JoinColumn,
   ManyToOne,
   PrimaryGeneratedColumn,
   UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'orders' })
export class Order {
   @PrimaryGeneratedColumn()
   id: number;

   @ManyToOne(() => User, user => user.buyorders)
   buyer: User;

   @ManyToOne(() => User, user => user.sellorders)
   seller: User;

   @ManyToOne(() => Product, product => product.orders)
   @JoinColumn()
   product: Product;

   @Column()
   amount: number;

   @Column()
   isPaymentDone: boolean;

   @Column({ type: 'timestamp', nullable: true })
   paymentDate: string;

   @DeleteDateColumn()
   deleted_at: string;

   @UpdateDateColumn()
   updated_at: string;

   @CreateDateColumn()
   created_at: string;
}
