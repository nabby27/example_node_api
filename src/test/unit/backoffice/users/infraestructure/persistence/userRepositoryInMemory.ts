import { User } from '../../../../../../app/boundedContext/backoffice/users/domain/user';
import { UserRepository } from '../../../../../../app/boundedContext/backoffice/users/domain/userRepository';

export class UserRepositoryInMemory implements UserRepository {

    private users: User[] = [];

    public addUser(user: User) {
        this.users.push(user);
    }

    public setUsers(user: User[]) {
        this.users = user;
    }

    public search(): Promise<User[]> {
        return new Promise((resolve, reject) => {
            resolve(this.users);
        });
    }

}
