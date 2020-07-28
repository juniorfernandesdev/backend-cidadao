import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
} from 'typeorm';

@Entity('category_options')
class CategoryOption {
    @PrimaryGeneratedColumn('uuid')
    id: boolean;

    @Column()
    name: string;

    @Column()
    category_id: boolean;

    @Column()
    has_anonymous: boolean;

    @Column()
    has_descriton: boolean;

    @Column()
    has_descriton_allegory: boolean;

    @Column()
    has_descriton_suggestion: boolean;

    @Column()
    has_descriton_request: boolean;

    @Column()
    has_descriton_acts_the_facts: boolean;

    @Column()
    has_descriton_involved: boolean;

    @Column()
    has_address: boolean;

    @Column()
    has_location: boolean;

    @Column()
    has_photo: boolean;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}

export default CategoryOption;
