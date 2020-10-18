import { User } from '../valueObjects/user';
import { UserId } from '../valueObjects/userId';

export interface UserRepository {

    searchOne(id: UserId): Promise<User | null>;
    search(): Promise<User[]>;
    save(user: User): Promise<void>;
    update(user: User): Promise<void>;
    delete(user: User): Promise<void>;

}
