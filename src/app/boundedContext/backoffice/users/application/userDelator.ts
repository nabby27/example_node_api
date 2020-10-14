import { UserId } from '../domain/dtos/userId';
import { UserRepository } from '../domain/dtos/userRepository';

export class UserDelator {

  private userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  public run(id: UserId): void {
    this.userRepository.delete(id);
  }

}
