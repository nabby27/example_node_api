import { User } from '../../../../../../app/boundedContext/backoffice/users/domain/valueObjects/user';
import { UserId } from '../../../../../../app/boundedContext/backoffice/users/domain/valueObjects/userId';
import { UserRepository } from '../../../../../../app/boundedContext/backoffice/users/domain/repositories/userRepository';

interface UserIndexed {
  [id: string]: User
}

export class UserRepositoryInMemory implements UserRepository {

  private users: User[] = [];
  private usersIndexed: UserIndexed = {}

  async searchOne(id: UserId): Promise<User | null> {
    return await new Promise((resolve) => {
      const user: User = this.usersIndexed[id.getValue()];
      if (!user) {
        resolve(null);
      }

      resolve(user);
    });
  }

  search(): Promise<User[]> {
    return new Promise((resolve) => {
      resolve(this.users);
    });
  }

  save(user: User): Promise<void> {
    return new Promise((resolve) => {
      this.addUserInMemory(user);
      resolve();
    });
  }

  update(userToUpdate: User): Promise<void> {
    return new Promise((resolve) => {
      this.delete(userToUpdate);
      this.addUserInMemory(userToUpdate);
      resolve();
    });
  }

  delete(userToDelete: User): Promise<void> {
    return new Promise((resolve) => {
      this.users = this.users.filter((user: User) => user.getValueId() !== userToDelete.getValueId());
      delete this.usersIndexed[userToDelete.getValueId()];
      resolve();
    });
  }

  public addUsers(...users: User[]): void {
    users.map(user => this.addUserInMemory(user));
  }

  private addUserInMemory(user: User): void {
    this.users.push(user);
    this.usersIndexed[user.getValueId()] = user;
  }

}
