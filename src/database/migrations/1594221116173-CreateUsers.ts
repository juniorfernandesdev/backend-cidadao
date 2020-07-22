import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateUsers1594221116173 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'users',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()',
                    },
                    {
                        name: 'name',
                        type: 'varchar',
                    },
                    {
                        name: 'cpf',
                        type: 'int',
                        isUnique: true,
                    },
                    {
                        name: 'date_of_birth',
                        type: 'varchar',
                    },
                    {
                        name: 'gender',
                        type: 'int',
                    },
                    {
                        name: 'cell_phone',
                        type: 'int',
                    },
                    {
                        name: 'address',
                        type: 'varchar',
                    },
                    {
                        name: 'address_neighborhood',
                        type: 'varchar',
                    },
                    {
                        name: 'address_number',
                        type: 'int',
                    },
                    {
                        name: 'address_complement',
                        type: 'varchar',
                    },
                    {
                        name: 'email',
                        type: 'varchar',
                        isUnique: true,
                    },
                    {
                        name: 'password',
                        type: 'varchar',
                    },
                    {
                        name: 'terms',
                        type: 'boolean',
                    },
                    {
                        name: 'avatar',
                        type: 'varchar',
                        isNullable: true,
                    },
                    {
                        name: 'profile',
                        type: 'booleam',
                        isNullable: true,
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()',
                    },
                    {
                        name: 'updated_at',
                        type: 'timestamp',
                        default: 'now()',
                    },
                ],
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('users');
    }
}
