import { UserEntity } from '../entities/user.entity';

export interface UserRepository {

    showAllUsers(): Promise<UserEntity[]>;

}
