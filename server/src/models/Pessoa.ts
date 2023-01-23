import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from "typeorm"
import User from './User';


@Entity({ name: 'pessoa' })
export class PessoaEntity {

    @PrimaryGeneratedColumn('uuid')
    id!: string

    @OneToOne(() => User, user => user.pessoa, { onDelete: 'CASCADE' })
    user: User;

    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column()
    age: number

    @Column()
    phoneNumber: string

    @Column()
    address: string

    @Column()
    cpf: string

}

export default PessoaEntity;
