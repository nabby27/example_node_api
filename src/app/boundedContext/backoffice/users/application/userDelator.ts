import { UserId } from '../domain/valueObjects/userId';
import { UserRepository } from '../domain/valueObjects/userRepository';

export class UserDelator {

  private userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  public run(id: UserId): void {
    this.userRepository.delete(id);
  }

}
