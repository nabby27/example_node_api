import { User } from '../../../../../../app/boundedContext/backoffice/users/domain/user';
import { UserId } from '../../../../../../app/boundedContext/backoffice/users/domain/userId';
import { UserRepository } from '../../../../../../app/boundedContext/backoffice/users/domain/userRepository';

export class UserRepositoryInMemory implements UserRepository {

  private users: User[] = [];

  public addUser(user: User): void {
    this.users.push(user);
  }

  public setUsers(user: User[]): void {
    this.users = user;
  }

  public searchOne(id: UserId): Promise<User> {
    throw new Error('Method not implemented.');
  }

  public search(): Promise<User[]> {
    return new Promise((resolve, reject) => {
      resolve(this.users);
    });
  }

  save(user: User): void {
    throw new Error('Method not implemented.');
  }
  update(user: User): void {
    throw new Error('Method not implemented.');
  }
  delete(ud: UserId): void {
    throw new Error('Method not implemented.');
  }

}
