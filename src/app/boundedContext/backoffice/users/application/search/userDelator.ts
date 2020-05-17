import { UserId } from '../../domain/userId';
import { UserRepository } from '../../domain/userRepository';

export class UserDelator {

    private userRepository: UserRepository;

    constructor(userRepository: UserRepository) {
        this.userRepository = userRepository;
    }

    public run(id: UserId): void {
        this.userRepository.delete(id);
    }

}
