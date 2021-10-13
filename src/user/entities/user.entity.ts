import { Product } from 'src/user/entities/user.entity';
import {
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity,
    JoinTable,
    ManyToMany,
    PrimaryColumn,
    UpdateDateColumn,
 } from 'typeorm';

@Entity()
export class User {
    @PrimaryColumn()
    id: number;
    @Column()
    buyer_id : number;
    seller_id : number;
    product_id : number;
    amounts : number;
    paid_price : number;
    isPaymentDone : boolean;

    @ManyToMany(() => User, user => user.courses)
    @JoinTable()
    users: User[];

    @UpdateDateColumn()
    updated_at: string;

    @CreateDateColumn()
    created_at: string;
}