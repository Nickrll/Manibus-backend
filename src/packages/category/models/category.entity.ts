import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity()
export class Category {
    @PrimaryColumn({ unique: true, nullable: false })
    name: string;

    @Column({nullable: false})
    description: string;
}
