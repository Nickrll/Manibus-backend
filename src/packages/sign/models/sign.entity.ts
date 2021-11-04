import { Lesson } from '../../lesson/models/lesson.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToMany, JoinTable } from 'typeorm';

@Entity()
export class Sign {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable: false})
    name: string;

    @Column({nullable: false})
    description: string;

    @Column({nullable: false})
    video: string;
    
    @Column()
    image: string;

    @Column({nullable: false})
    difficulty: number;

    @ManyToMany(() => Lesson, lesson => lesson.signs)
    lessons: Lesson[];
}