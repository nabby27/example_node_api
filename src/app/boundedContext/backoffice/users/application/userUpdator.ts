import { User } from '../domain/valueObjects/user';
import { UserRepository } from '../domain/valueObjects/userRepository';

export class UserUpdator {

  private userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  public run(user: User): void {
    this.userRepository.update(user);
  }

}
