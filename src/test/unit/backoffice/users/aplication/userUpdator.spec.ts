import { UserUpdator } from '../../../../../app/boundedContext/backoffice/users/application/userUpdator';
import { UserNotFound } from '../../../../../app/boundedContext/backoffice/users/domain/exceptions/userNotFound';
import { User } from '../../../../../app/boundedContext/backoffice/users/domain/valueObjects/user';
import { UserId } from '../../../../../app/boundedContext/backoffice/users/domain/valueObjects/userId';
import { UserName } from '../../../../../app/boundedContext/backoffice/users/domain/valueObjects/userName';
import { UserRepositoryInMemory } from '../infraestructure/persistence/userRepositoryInMemory';

// eslint-disable-next-line max-lines-per-function
describe('Unit test to User Updater Application Service', () => {
  let userUpdator: UserUpdator;
  let userRepositoryInMemory: UserRepositoryInMemory;

  beforeEach(() => {
    userRepositoryInMemory = new UserRepositoryInMemory();
    userUpdator = new UserUpdator(userRepositoryInMemory);
  });

  test('Should update user when exists', async () => {
    const user = new User(UserId.random(), new UserName('Iván'));
    userRepositoryInMemory.addUsers(user);

    expect(await userUpdator.run(user));
  });

  test('Should send error when update user that not exists', async () => {
    const user = new User(UserId.random(), new UserName('Iván'));
    try {
      await userUpdator.run(user);
    } catch (error) {
      expect(error).toBeInstanceOf(UserNotFound);
    }
  });
});
