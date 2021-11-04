import { Profile } from 'src/packages/profile/models/profile.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToMany, JoinTable, ManyToOne, OneToOne } from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne(() => Profile, {
        nullable: false,
        cascade: true
    })
    profile: Profile;

    @Column({nullable: false})
    email: string;
}