import { UserSearcher } from '../../../../../app/boundedContext/backoffice/users/application/userSearcher';
import { User } from '../../../../../app/boundedContext/backoffice/users/domain/valueObjects/user';
import { UserId } from '../../../../../app/boundedContext/backoffice/users/domain/valueObjects/userId';
import { UserName } from '../../../../../app/boundedContext/backoffice/users/domain/valueObjects/userName';
import { UserRepositoryInMemory } from '../infraestructure/persistence/userRepositoryInMemory';

// eslint-disable-next-line max-lines-per-function
describe('Unit test to User Searcher Application Service', () => {
  let userSearcher: UserSearcher;
  let userRepositoryInMemory: UserRepositoryInMemory;

  beforeEach(() => {
    userRepositoryInMemory = new UserRepositoryInMemory();
    userSearcher = new UserSearcher(userRepositoryInMemory);
  });

  test('Should get empty users when there aren\'t', async () => {
    const users = await userSearcher.run();

    expect([]).toEqual(users);
  });

  test('Should get 2 users when have 2', async () => {
    const user1 = new User(UserId.random(), new UserName('Iván'));
    const user2 = new User(UserId.random(), new UserName('Nabby'));
    userRepositoryInMemory.addUsers(user1, user2);

    const users = await userSearcher.run();

    expect([user1, user2]).toEqual(users);
  });
});
