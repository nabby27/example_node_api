import { User } from './user';

export interface UserRepository {

    search(): Promise<User[]>;

}
