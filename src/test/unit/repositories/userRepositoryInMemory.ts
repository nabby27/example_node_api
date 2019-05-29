import { UserEntity } from '../../../app/domain/users/entities/user.entity';
import { UserRepository } from '../../../app/domain/users/repositories/userRepository';

export class UserRepositoryInMemory implements UserRepository {

    private users: UserEntity[] = [];

    public addUser(user: UserEntity) {
        this.users.push(user);
    }

    public setUsers(user: UserEntity[]) {
        this.users = user;
    }

    public showAllUsers(): Promise<UserEntity[]> {
        return new Promise((resolve, reject) => {
            resolve(this.users);
        });
    }

}
