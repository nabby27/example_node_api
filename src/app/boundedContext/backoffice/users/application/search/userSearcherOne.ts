import { User } from '../../domain/user';
import { UserId } from '../../domain/userId';
import { UserRepository } from '../../domain/userRepository';

export class UserSearcherOne {

    private userRepository: UserRepository;

    constructor(userRepository: UserRepository) {
      this.userRepository = userRepository;
    }

    public async run(id: UserId): Promise<User> {
      return await this.userRepository.searchOne(id);
    }

}
