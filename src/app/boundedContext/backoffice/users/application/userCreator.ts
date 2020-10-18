import { UserAlreadyExists } from '../domain/exceptions/userAlreadyExists';
import { User } from '../domain/valueObjects/user';
import { UserRepository } from '../domain/repositories/userRepository';

export class UserCreator {

  private userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  public async run(user: User): Promise<void> {
    const userSearched = await this.userRepository.searchOne(user.getId());

    if (userSearched) {
      throw new UserAlreadyExists(user);
    }

    await this.userRepository.save(user);
  }

}
