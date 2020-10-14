import { User } from '../domain/dtos/user';
import { UserId } from '../domain/dtos/userId';
import { UserRepository } from '../domain/dtos/userRepository';

export class UserSearcherOne {

  private userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  public async run(id: UserId): Promise<User> {
    return await this.userRepository.searchOne(id);
  }

}
