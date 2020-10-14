import { User } from '../domain/dtos/user';
import { UserRepository } from '../domain/dtos/userRepository';

export class UserSearcher {

  private userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  public async run(): Promise<User[]> {
    return await this.userRepository.search();
  }

}
