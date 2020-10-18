import { UserNotFound } from '../domain/exceptions/userNotFound';
import { User } from '../domain/valueObjects/user';
import { UserRepository } from '../domain/repositories/userRepository';

export class UserUpdator {

  private userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  public async run(user: User): Promise<void> {
    const userSearched = await this.userRepository.searchOne(user.getId());

    if (!userSearched) {
      throw new UserNotFound(user.getId());
    }

    this.userRepository.update(user);
  }

}
