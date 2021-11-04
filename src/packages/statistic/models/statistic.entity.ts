import { Lesson } from 'src/packages/lesson/models/lesson.entity';
import { Profile } from 'src/packages/profile/models/profile.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToMany, JoinTable, ManyToOne, OneToOne } from 'typeorm';

@Entity()
export class Statistic {
    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne(() => Lesson)
    lesson: Lesson;

    @Column({nullable: false})
    score: number;

    @Column({nullable: false})
    amt_finished: number;

    @ManyToMany(() => Profile, profile => profile.statistic)
    profile: Profile[];
}