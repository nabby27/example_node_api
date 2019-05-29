import { UserEntity } from '../entities/user.entity';
import { UserRepository } from '../repositories/userRepository';

export class ShowAllUsersAction {

    public async execute(userRepository: UserRepository): Promise<UserEntity[]> {
        return new Promise((resolve, reject) => {
            userRepository.showAllUsers()
                .then((users) => {
                    resolve(users);
                }).catch((error) => {
                    reject(error);
                });
        });
    }

}
