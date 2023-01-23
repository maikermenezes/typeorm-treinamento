import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from "typeorm"
import Pessoa from "./Pessoa";

@Entity({ name: 'user' })
export class UserEntity {

    @PrimaryGeneratedColumn('uuid')
    id!: string

    @OneToOne (() => Pessoa, pessoa => pessoa.user, { onDelete: 'CASCADE' })
    pessoa: Pessoa;

    @Column('text', { unique: true })
    email: string;

    @Column('text', { nullable: true })
    password: string;

    @Column('boolean', { nullable: true })
    isClient: boolean;

    @Column('text', { nullable: true})
    emailVerified: string;

    @Column({ nullable: true })
    emailToken: string;

    @Column({ nullable: true })
    emailExpires: Date;

    @Column('boolean', { nullable: true })
    emailVerifiedToken: boolean;

}

export default UserEntity;
