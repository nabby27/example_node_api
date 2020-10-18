import { MigrationInterface, QueryRunner } from 'typeorm';
import { UserEntity } from '../../../app/boundedContext/backoffice/users/infrastructure/persistence/typeORM/userEntity';
export class InsertUsers1602525291328 implements MigrationInterface {

  // eslint-disable-next-line max-lines-per-function
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.manager.createQueryBuilder()
      .insert()
      .into(UserEntity)
      .values([
        {
          id: '32547dd7-617a-4985-a59a-91a176e55b83',
          name: 'Iván'
        },
        {
          id: '43ba0b24-4d0b-40f7-aa7f-1b2a3058f484',
          name: 'Nabby'
        }
      ])
      .execute();
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const userIds = ['32547dd7-617a-4985-a59a-91a176e55b83', '43ba0b24-4d0b-40f7-aa7f-1b2a3058f484'];
    await queryRunner.manager.createQueryBuilder()
      .delete()
      .from(UserEntity)
      .where('users.id IN (:...ids)', { ids: userIds })
      .execute();
  }

}
