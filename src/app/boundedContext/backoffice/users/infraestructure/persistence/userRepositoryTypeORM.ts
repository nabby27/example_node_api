import { EntityManager, getConnection } from 'typeorm';

import { UserEntity } from './typeORM/userEntity';

import { UserModel } from '../../domain/models/user.model';
import { User } from '../../domain/dtos/user';
import { UserId } from '../../domain/dtos/userId';
import { UserName } from '../../domain/dtos/userName';
import { UserRepository } from '../../domain/dtos/userRepository';

export class UserRepositoryTypeORM implements UserRepository {

  public async searchOne(id: UserId): Promise<User> {
    const firstItem = 0;
    const entityManager: EntityManager = getConnection('backoffice').manager;
    const user = await entityManager.findOne(UserEntity, id.getValue());

    if (!user) {
      throw new Error('User not exist');
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
