import { User } from '../../../../../../app/boundedContext/backoffice/users/domain/user';
import { UserRepository } from '../../../../../../app/boundedContext/backoffice/users/domain/userRepository';
import { UserId } from '../../../../../../app/boundedContext/backoffice/users/domain/userId';

export class UserRepositoryInMemory implements UserRepository {

    private users: User[] = [];

    public addUser(user: User) {
        this.users.push(user);
    }

    public setUsers(user: User[]) {
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

}
