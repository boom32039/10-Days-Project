import {MigrationInterface, QueryRunner} from "typeorm";

export class test41634205514779 implements MigrationInterface {
    name = 'test41634205514779'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" ADD "photo" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "product" ADD "unit_sold" integer NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "unit_sold"`);
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "photo"`);
    }

}
