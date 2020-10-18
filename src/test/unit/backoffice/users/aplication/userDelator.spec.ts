import { UserDelator } from '../../../../../app/boundedContext/backoffice/users/application/userDelator';
import { UserNotFound } from '../../../../../app/boundedContext/backoffice/users/domain/exceptions/userNotFound';
import { User } from '../../../../../app/boundedContext/backoffice/users/domain/valueObjects/user';
import { UserId } from '../../../../../app/boundedContext/backoffice/users/domain/valueObjects/userId';
import { UserName } from '../../../../../app/boundedContext/backoffice/users/domain/valueObjects/userName';
import { UserRepositoryInMemory } from '../infraestructure/persistence/userRepositoryInMemory';

// eslint-disable-next-line max-lines-per-function
describe('Unit test to User Delator Application Service', () => {
  let userDelator: UserDelator;
  let userRepositoryInMemory: UserRepositoryInMemory;

  beforeEach(() => {
    userRepositoryInMemory = new UserRepositoryInMemory();
    userDelator = new UserDelator(userRepositoryInMemory);
  });

  test('Should delete user when exist in database', async () => {
    const user = new User(UserId.random(), new UserName('Iván'));
    userRepositoryInMemory.addUsers(user);

    expect(await userDelator.run(user.getId()));
  });

  test('Should send error when delete user that not exists', async () => {
    const userId = UserId.random();
    try {
      await userDelator.run(userId);
    } catch (error) {
      expect(error).toBeInstanceOf(UserNotFound);
    }
  });
});
