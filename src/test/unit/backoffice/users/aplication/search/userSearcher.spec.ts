import { UserSearcher } from '../../../../../../app/boundedContext/backoffice/users/application/search/userSearcher';
import { User } from '../../../../../../app/boundedContext/backoffice/users/domain/user';
import { UserId } from '../../../../../../app/boundedContext/backoffice/users/domain/userId';
import { UserName } from '../../../../../../app/boundedContext/backoffice/users/domain/userName';
import { UserRepositoryInMemory } from '../../infraestructure/persistence/userRepositoryInMemory';

// eslint-disable-next-line max-lines-per-function
describe('Unit test to User Search', () => {
  let userSearcher: UserSearcher;
  let userRepositoryInMemory: UserRepositoryInMemory;

  beforeEach(() => {
    userRepositoryInMemory = new UserRepositoryInMemory();
    userSearcher = new UserSearcher(userRepositoryInMemory);
  });

  test('Should get empty users when there aren\'t', async () => {
    const usersExpected: User[] = [];
    userRepositoryInMemory.setUsers(usersExpected);

    const users = await userSearcher.run();

    expect(usersExpected).toEqual(users);
  });

  test('Should get 2 users when have 2', async () => {
    const user1 = new User(new UserId('32547dd7-617a-4985-a59a-91a176e55b83'), new UserName('Iván'));
    const user2 = new User(new UserId('43ba0b24-4d0b-40f7-aa7f-1b2a3058f484'), new UserName('Nabby'));
    const usersExpected: User[] = [user1, user2];

    userRepositoryInMemory.setUsers(usersExpected);

    const users = await userSearcher.run();

    expect(usersExpected).toEqual(users);
  });
});
