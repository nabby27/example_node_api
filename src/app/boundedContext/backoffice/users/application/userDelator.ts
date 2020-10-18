import { UserNotFound } from '../domain/exceptions/userNotFound';
import { UserId } from '../domain/valueObjects/userId';
import { UserRepository } from '../domain/repositories/userRepository';

export class UserDelator {

  private userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  public async run(id: UserId): Promise<void> {
    const userSearched = await this.userRepository.searchOne(id);

    if (!userSearched) {
      throw new UserNotFound(id);
    }

    this.userRepository.delete(userSearched);
  }

}
