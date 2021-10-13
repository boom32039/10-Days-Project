// user.entities
import { Course } from 'src/course/entities/course.entity';
import {
   Column,
   CreateDateColumn,
   DeleteDateColumn,
   Entity,
   JoinTable,
   ManyToMany,
   PrimaryGeneratedColumn,
   UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'users' })
export class User {
   @PrimaryGeneratedColumn()
   id: number;

   @Column()
   name: string;

   @Column({ unique: true })
   email: string;

   //@ManyToMany(() => Course, course => course.users)
   //@JoinTable()
   //courses: Course;

   @DeleteDateColumn()
   deleted_at: string;

   @UpdateDateColumn()
   updated_at: string;

   @CreateDateColumn()
   created_at: string;
}