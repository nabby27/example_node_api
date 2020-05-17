import { User } from '../../domain/user';
import { UserRepository } from '../../domain/userRepository';

export class UserUpdator {

    private userRepository: UserRepository;

    constructor(userRepository: UserRepository) {
        this.userRepository = userRepository;
    }

    public run(user: User): void {
        this.userRepository.update(user);
    }

}
