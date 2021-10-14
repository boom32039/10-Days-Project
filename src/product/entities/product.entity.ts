
import { User } from 'src/user/entities/user.entity';
import {
    Column,
    CreateDateColumn,
    Entity,
    JoinTable,
    ManyToMany,
    PrimaryColumn,
    UpdateDateColumn,
    PrimaryGeneratedColumn,
    ManyToOne,
    DeleteDateColumn
} from 'typeorm';

@Entity({name : 'product'})
export class Product {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name : string;
    photo : string;
    unit_sold : number;
    @ManyToOne(() => User , user => user.products)
    seller : User;
    @DeleteDateColumn()
    deleted_at: string;
    @UpdateDateColumn()
    updated_at: string;

    @CreateDateColumn()
    created_at: string;
}