import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
} from 'typeorm';

@Entity('users')
class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    cpf: number;

    @Column()
    date_of_birth: number;

    @Column()
    gender: number;

    @Column()
    cell_phone: string;

    @Column()
    address: string;

    @Column()
    address_neighborhood: string;

    @Column()
    address_number: number;

    @Column()
    address_complement: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    terms: boolean;

    @Column()
    avatar: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}

export default User;
