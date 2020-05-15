import db from '../../../../shared/infraestructure/dbConnection';
import { User } from '../../domain/user';
import { UserId } from '../../domain/userId';
import { UserName } from '../../domain/userName';
import { UserRepository } from '../../domain/userRepository';

export class UserRepositoryPg implements UserRepository {

    constructor() {
    }

    async search(): Promise<User[]> {
        return new Promise(async (resolve, reject) => {
            db.query('SELECT * FROM users', (error, result) => {
                if (error) {
                    return reject('Error when get all users -> ' + error);
                }

                const users: User[] = [];
                result.rows.forEach((data: any) => {
                    users.push(new User(new UserId(data.id), new UserName(data.name)));
                });
                return resolve(users);
            });
        });
    }

}
