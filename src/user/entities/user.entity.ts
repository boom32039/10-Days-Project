import { Order } from 'src/order/entities/order.entity';
import { Product } from 'src/product/entities/product.entity';
import {
   Column,
   CreateDateColumn,
   Entity,
   OneToMany,
   PrimaryGeneratedColumn,
   UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'users' })
export class User {
   @PrimaryGeneratedColumn()
   id: number;
   @Column()
   username: string;
   @Column()
   password: string;
   @Column()
   name: string;
   @Column()
   E_mail: string;
   @Column()
   tel: string;
   @Column()
   shopname: string;
   @Column()
   gender: string;
   @Column()
   birth_date: string;

   @OneToMany(() => Order, order => order.buyer)
   buyorders: Order[];

   @OneToMany(() => Order, order => order.seller)
   sellorders: Order[];

   @OneToMany(() => Product, product => product.seller)
   products: Product[];

   @DeleteDateColumn()
   deleted_at: string;

   @UpdateDateColumn()
   updated_at: string;

   @CreateDateColumn()
   created_at: string;

}
