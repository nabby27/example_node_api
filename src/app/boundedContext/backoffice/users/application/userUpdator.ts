import { User } from '../domain/dtos/user';
import { UserRepository } from '../domain/dtos/userRepository';

export class UserUpdator {

  private userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  public run(user: User): void {
    this.userRepository.update(user);
  }

}
