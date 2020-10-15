import { User } from '../domain/valueObjects/user';
import { UserId } from '../domain/valueObjects/userId';
import { UserRepository } from '../domain/valueObjects/userRepository';

export class UserSearcherOne {

  private userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  public async run(id: UserId): Promise<User> {
    return await this.userRepository.searchOne(id);
  }

}
