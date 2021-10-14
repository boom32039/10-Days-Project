import { Product } from 'src/product/entities/product.entity';
import {
    Column,
    CreateDateColumn,
    Entity,
    JoinTable,
    ManyToMany,
    PrimaryColumn,
    UpdateDateColumn,
} from 'typeorm';

@Entity({name : 'users'})
export class User {
    @PrimaryColumn()
    id: number;
    @Column()
    username : string;
    name : string;
    E_mail : string;
    tel : string;
    shopname : number;
    gender : string;
    birth_date : string;

    

    @UpdateDateColumn()
    updated_at: string;

    @CreateDateColumn()
    created_at: string;
}