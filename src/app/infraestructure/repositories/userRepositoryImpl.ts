import db from '../../constants';
import { UserEntity } from '../../domain/users/entities/user.entity';
import { UserRepository } from '../../domain/users/repositories/userRepository';

export class UserRepositoryImpl implements UserRepository {

    constructor() {
    }

    async showAllUsers(): Promise<UserEntity[]> {
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM USERS', (error, rows) => {
                if (error) {
                    reject('Error when execute query: ' + error);
                }
                const users: UserEntity[] = [];
                rows.forEach((data: any) => {
                    users.push(new UserEntity(data));
                });
                resolve(users);
            });
        });
    }

}
