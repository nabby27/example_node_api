import { EntityManager, getConnection } from 'typeorm';

import { UserEntity } from './typeORM/userEntity';

import { UserModel } from '../../domain/models/user.model';
import { User } from '../../domain/valueObjects/user';
import { UserId } from '../../domain/valueObjects/userId';
import { UserName } from '../../domain/valueObjects/userName';
import { UserRepository } from '../../domain/repositories/userRepository';

export class UserRepositoryTypeORM implements UserRepository {

  public async searchOne(id: UserId): Promise<User | null> {
    const firstItem = 0;
    const entityManager: EntityManager = getConnection('backoffice').manager;
    const user = await entityManager.findOne(UserEntity, id.getValue());

    if (!user) {
      return null;
    }

    return this.getUsersByUsersModel(user)[firstItem];
  }

  public async search(): Promise<User[]> {
    const entityManager: EntityManager = getConnection('backoffice').manager;
    const users = await entityManager.find(UserEntity);

    return this.getUsersByUsersModel(...users);
  }

  public async save(user: User): Promise<void> {
    const entityManager: EntityManager = getConnection('backoffice').manager;
    await entityManager.save(UserEntity, user.toModel());
  }

  public async update(user: User): Promise<void> {
    const entityManager: EntityManager = getConnection('backoffice').manager;
    await entityManager.save(UserEntity, user.toModel());
  }

  public async delete(user: User): Promise<void> {
    const entityManager: EntityManager = getConnection('backoffice').manager;
    await entityManager.delete(UserEntity, user.getValueId());
  }

  private getUsersByUsersModel(...userModel: UserModel[]): User[] {
    return userModel.map((user: UserModel) => new User(new UserId(user.id), new UserName(user.name)));
  }

}
