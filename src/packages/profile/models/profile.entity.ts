import { Statistic } from 'src/packages/statistic/models/statistic.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToMany, JoinTable, ManyToOne } from 'typeorm';

@Entity()
export class Profile {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable: false})
    first_name: string;

    @Column({nullable: false})
    last_name: string;

    @ManyToMany(() => Statistic, statistic => statistic.profile, {
        nullable: true
    })
    @JoinTable()
    statistic: Statistic[];
}