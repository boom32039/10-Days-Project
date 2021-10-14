import { userInfo } from 'os';
import { Order } from 'src/order/entities/order.entity';
import { Product } from 'src/product/entities/product.entity';
import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    JoinTable,
    ManyToMany,
    ManyToOne,
    OneToMany,
    PrimaryColumn,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm';

@Entity({name : 'users'})
export class User {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    username : string;
    @Column()
    name : string;
    @Column()
    E_mail : string;
    @Column()
    tel : string;
    @Column()
    shopname : number;
    @Column()
    gender : string;
    @Column()
    birth_date : string;

    @OneToMany(() => Order, order => order.buyer)
    @JoinColumn()
    buyorders : Order;
   
    @OneToMany(() => Order, order => order.seller)
    @JoinColumn()
    sellorders : Order;

    @OneToMany(() => Product, product => product.seller)
    @JoinColumn()
    products : Product;

    @UpdateDateColumn()
    updated_at: string;

    @CreateDateColumn()
    created_at: string;
}