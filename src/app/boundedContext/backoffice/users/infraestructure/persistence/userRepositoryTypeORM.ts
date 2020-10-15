import { EntityManager, getConnection } from 'typeorm';

import { UserEntity } from './typeORM/userEntity';

import { UserModel } from '../../domain/models/user.model';
import { User } from '../../domain/valueObjects/user';
import { UserId } from '../../domain/valueObjects/userId';
import { UserName } from '../../domain/valueObjects/userName';
import { UserRepository } from '../../domain/valueObjects/userRepository';
import { UserNotFound } from '../../domain/exceptions/userNotFound';
import { HTTP_STATUS } from '../../../../../application/shared/constants/http_codes';

export class UserRepositoryTypeORM implements UserRepository {

  public async searchOne(id: UserId): Promise<User> {
    const firstItem = 0;
    const entityManager: EntityManager = getConnection('backoffice').manager;
    const user = await entityManager.findOne(UserEntity, id.getValue());

    if (!user) {
      throw new UserNotFound(HTTP_STATUS.NOT_FOUND, 'User not exist');
    }

    return this.getUsersByUsersModel(user)[firstItem];
  }

  public async search(): Promise<User[]> {
    const entityManager: EntityManager = getConnection('backoffice').manager;
    const users = await entityManager.find(UserEntity);

    return this.getUsersByUsersModel(...users);
  }

  public save(user: User): void {
    const entityManager: EntityManager = getConnection('backoffice').manager;
    entityManager.save(user.toModel());
  }

  public update(user: User): void {
    const entityManager: EntityManager = getConnection('backoffice').manager;
    entityManager.save(user.toModel());
  }

  public delete(id: UserId): void {
    const entityManager: EntityManager = getConnection('backoffice').manager;
    entityManager.delete(UserEntity, id.getValue());
  }

  private getUsersByUsersModel(...userModel: UserModel[]): User[] {
    return userModel.map((user: UserModel) => new User(new UserId(user.id), new UserName(user.name)));
  }

}
