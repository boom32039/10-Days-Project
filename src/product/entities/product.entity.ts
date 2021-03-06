import { User } from 'src/user/entities/user.entity';
import { Order } from 'src/order/entities/order.entity';
import {
    Column,
    CreateDateColumn,
    Entity,
    UpdateDateColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
    DeleteDateColumn,
    OneToMany,
    JoinColumn
} from 'typeorm';

@Entity({name : 'product'})
export class Product {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name : string;

    @Column()
    photo : string;

    @Column()
    unit_sold : number;

    @ManyToOne(() => User , user => user.products)
    @JoinColumn()
    seller : User;

    @OneToMany(() => Order, order => order.product)
    orders : Order[];
    
    @DeleteDateColumn()
    deleted_at: string;

    @UpdateDateColumn()
    updated_at: string;

    @CreateDateColumn()
    created_at: string;
}