import { User } from '../domain/valueObjects/user';
import { UserRepository } from '../domain/valueObjects/userRepository';
import { UserSearcherOne } from './userSearcherOne';

export class UserCreator {

  private userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  public async run(user: User): Promise<void> {
    const userSearcherOne: UserSearcherOne = new UserSearcherOne(this.userRepository);
    const userSearched = await userSearcherOne.run(user.getId());

    if (userSearched.getId()) {
      throw new Error('Error when create user because user already exist');
    }

    this.userRepository.save(user);
  }

}
