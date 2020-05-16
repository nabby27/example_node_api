import db from '../../../../shared/infraestructure/dbConnection';
import { User } from '../../domain/user';
import { UserId } from '../../domain/userId';
import { UserName } from '../../domain/userName';
import { UserRepository } from '../../domain/userRepository';

export class UserRepositoryPg implements UserRepository {

    constructor() {
    }

    async searchOne(id: UserId): Promise<User> {
        return new Promise(async (resolve, reject) => {
            db.query('SELECT * FROM users WHERE id = $1', [id.getValue()])
                .then((result) => {
                    resolve(new User(
                        new UserId(result.rows[0].id),
                        new UserName(result.rows[0].name),
                    ));
                })
                .catch((error) => reject('Error when get one user -> ' + error));
        });
    }

    async search(): Promise<User[]> {
        return new Promise(async (resolve, reject) => {
            db.query('SELECT * FROM users')
                .then((result) => {
                    const users: User[] = [];
                    result.rows.forEach((data: any) => {
                        users.push(new User(
                            new UserId(data.id),
                            new UserName(data.name)),
                        );
                    });
                    resolve(users);
                })
                .catch((error) => reject('Error when get all users -> ' + error));
        });
    }

}
