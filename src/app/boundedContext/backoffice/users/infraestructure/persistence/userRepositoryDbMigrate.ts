import db from '../../../../shared/infraestructure/persistence/dbMigrateConnection';
import { UserModel } from '../../domain/models/user.model';
import { User } from '../../domain/valueObjects/user';
import { UserId } from '../../domain/valueObjects/userId';
import { UserName } from '../../domain/valueObjects/userName';
import { UserRepository } from '../../domain/repositories/userRepository';

export class UserRepositoryDbMigrate implements UserRepository {

  public async searchOne(id: UserId): Promise<User> {
    return new Promise((resolve, reject) => {
      const firstIndex = 0;
      db.query('SELECT * FROM users WHERE id = $1', [id.getValue()])
        .then((result) => {
          resolve(new User(new UserId(result.rows[firstIndex].id), new UserName(result.rows[firstIndex].name)));
        })
        .catch((error) => reject(`Error when get one user -> ${error}`));
    });
  }

  public async search(): Promise<User[]> {
    return new Promise((resolve, reject) => {
      db.query('SELECT * FROM users')
        .then((result) => {
          const users: User[] = [];
          result.rows.forEach((row: UserModel) => {
            users.push(new User(new UserId(row.id), new UserName(row.name)));
          });
          resolve(users);
        })
        .catch((error) => reject(`Error when get all users -> ${error}`));
    });
  }

  public async save(user: User): Promise<void> {
    await db.query('INSERT INTO users (id, name) VALUES ($1, $2)', [user.getValueId(), user.getValueName()])
      .catch((error) => {
        throw new Error(`Error when insert user -> ${error}`);
      });
  }

  public async update(user: User): Promise<void> {
    await db.query('UPDATE users SET name = $1 WHERE id = $2', [user.getValueName(), user.getValueId()])
      .catch((error) => {
        throw new Error(`Error when update user -> ${error}`);
      });
  }

  public async delete(user: User): Promise<void> {
    await db.query('DELETE FROM users WHERE id = $1', [user.getValueId()])
      .catch((error) => {
        throw new Error(`Error when delete user -> ${error}`);
      });
  }

}
