import { User } from '../domain/valueObjects/user';
import { UserRepository } from '../domain/repositories/userRepository';

export class UserSearcher {

  private userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  public async run(): Promise<User[]> {
    return await this.userRepository.search();
  }

}
