import { UserNotFound } from '../domain/exceptions/userNotFound';
import { User } from '../domain/valueObjects/user';
import { UserId } from '../domain/valueObjects/userId';
import { UserRepository } from '../domain/repositories/userRepository';

export class UserSearcherOne {

  private userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  public async run(id: UserId): Promise<User> {
    const userSearched = await this.userRepository.searchOne(id);

    if (!userSearched) {
      throw new UserNotFound(id);
    }

    return userSearched;
  }

}
