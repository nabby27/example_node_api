import { UserSearcherOne } from '../../../../../app/boundedContext/backoffice/users/application/userSearcherOne';
import { UserNotFound } from '../../../../../app/boundedContext/backoffice/users/domain/exceptions/userNotFound';
import { User } from '../../../../../app/boundedContext/backoffice/users/domain/valueObjects/user';
import { UserId } from '../../../../../app/boundedContext/backoffice/users/domain/valueObjects/userId';
import { UserName } from '../../../../../app/boundedContext/backoffice/users/domain/valueObjects/userName';
import { UserRepositoryInMemory } from '../infraestructure/persistence/userRepositoryInMemory';

// eslint-disable-next-line max-lines-per-function
describe('Unit test to User Searcher One Application Service', () => {
  let userSearcherOne: UserSearcherOne;
  let userRepositoryInMemory: UserRepositoryInMemory;

  beforeEach(() => {
    userRepositoryInMemory = new UserRepositoryInMemory();
    userSearcherOne = new UserSearcherOne(userRepositoryInMemory);
  });

  test('Should get user when exists', async () => {
    const user = new User(UserId.random(), new UserName('Iván'));
    userRepositoryInMemory.addUsers(user);

    const userSearched = await userSearcherOne.run(user.getId());

    expect(user).toEqual(userSearched);
  });

  test('Should send error when search user that not exists', async () => {
    const userId = UserId.random();
    try {
      await userSearcherOne.run(userId);
    } catch (error) {
      expect(error).toBeInstanceOf(UserNotFound);
    }
  });
});
