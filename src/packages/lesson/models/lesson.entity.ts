import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToMany, JoinTable, ManyToOne } from 'typeorm';
import { Sign } from '../../sign/models/sign.entity';
import { Category } from '../../category/models/category.entity';


@Entity()
export class Lesson {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable: false})
    name: string;

    @Column({nullable: false})
    description: string;

    @Column()
    image: string;
    
    @Column({nullable: false})
    qst_amount: number;

    @Column({nullable: false})
    difficulty: number;

    @ManyToOne(type => Category, category => category.name) 
    category: Category;

    @ManyToMany(() => Sign, sign => sign.lessons)
    @JoinTable()
    signs: Sign[];
}