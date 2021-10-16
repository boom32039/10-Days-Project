import { Order } from 'src/order/entities/order.entity';
import { Product } from 'src/product/entities/product.entity';
import {
   Column,
   CreateDateColumn,
   Entity,
   OneToMany,
   PrimaryGeneratedColumn,
   UpdateDateColumn,
   DeleteDateColumn,
} from 'typeorm';

@Entity({ name: 'users' })
export class User {
   @PrimaryGeneratedColumn()
   id: number;
   @Column()
   username: string;
   @Column()
   password: string;
   @Column({nullable : true})
   name: string;
   @Column({nullable : true})
   E_mail: string;
   @Column({nullable : true})
   tel: string;
   @Column({nullable : true})
   shopname: string;
   @Column({nullable : true})
   gender: string;
   @Column({nullable : true})
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
