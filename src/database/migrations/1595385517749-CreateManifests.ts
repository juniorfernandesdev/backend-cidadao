import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateManifests1595385517749
    implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'manifests',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()',
                    },
                    {
                        name: 'user_id',
                        type: 'int',
                    },
                    {
                        name: 'category_option_id',
                        type: 'int',
                    },
                    {
                        name: 'status_manifest',
                        type: 'boolean',
                    },
                    {
                        name: 'anonymous',
                        type: 'boolean',
                        isNullable: true,
                    },
                    {
                        name: 'descriton',
                        type: 'boolean',
                        isNullable: true,
                    },
                    {
                        name: 'descriton_allegory',
                        type: 'boolean',
                        isNullable: true,
                    },
                    {
                        name: 'descriton_suggestion',
                        type: 'boolean',
                        isNullable: true,
                    },
                    {
                        name: 'descriton_request',
                        type: 'boolean',
                        isNullable: true,
                    },
                    {
                        name: 'descriton_acts_the_facts',
                        type: 'boolean',
                        isNullable: true,
                    },
                    {
                        name: 'descriton_involved',
                        type: 'boolean',
                        isNullable: true,
                    },
                    {
                        name: 'address',
                        type: 'boolean',
                        isNullable: true,
                    },
                    {
                        name: 'location',
                        type: 'boolean',
                        isNullable: true,
                    },
                    {
                        name: 'photo',
                        type: 'boolean',
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
        await queryRunner.dropTable('manifests');
    }
}
