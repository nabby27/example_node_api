import { User } from './user';
import { UserId } from './userId';

export interface UserRepository {

    searchOne(id: UserId): Promise<User>;
    search(): Promise<User[]>;

}
