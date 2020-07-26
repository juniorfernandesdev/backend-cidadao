import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateOptions1595385476595 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'category_options',
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
                        name: 'category_id',
                        type: 'int',
                    },
                    {
                        name: 'has_anonymous',
                        type: 'boolean',
                    },
                    {
                        name: 'has_descriton',
                        type: 'boolean',
                    },
                    {
                        name: 'has_descriton_allegory',
                        type: 'boolean',
                    },
                    {
                        name: 'has_descriton_suggestion',
                        type: 'boolean',
                    },
                    {
                        name: 'has_descriton_request',
                        type: 'boolean',
                    },
                    {
                        name: 'has_descriton_acts_the_facts',
                        type: 'boolean',
                    },
                    {
                        name: 'has_descriton_involved',
                        type: 'boolean',
                    },
                    {
                        name: 'has_address',
                        type: 'boolean',
                    },
                    {
                        name: 'has_location',
                        type: 'boolean',
                    },
                    {
                        name: 'has_photo',
                        type: 'boolean',
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
        await queryRunner.dropTable('options_categories');
    }
}
