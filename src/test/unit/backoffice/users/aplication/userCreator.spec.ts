import { UserCreator } from '../../../../../app/boundedContext/backoffice/users/application/userCreator';
import { UserAlreadyExists } from '../../../../../app/boundedContext/backoffice/users/domain/exceptions/userAlreadyExists';
import { UserIdNotvalid } from '../../../../../app/boundedContext/backoffice/users/domain/exceptions/userIdNotValid';
import { User } from '../../../../../app/boundedContext/backoffice/users/domain/valueObjects/user';
import { UserId } from '../../../../../app/boundedContext/backoffice/users/domain/valueObjects/userId';
import { UserName } from '../../../../../app/boundedContext/backoffice/users/domain/valueObjects/userName';
import { UserRepositoryInMemory } from '../infraestructure/persistence/userRepositoryInMemory';

// eslint-disable-next-line max-lines-per-function
describe('Unit test to User Creator Application service', () => {
  let userCreator: UserCreator;
  let userRepositoryInMemory: UserRepositoryInMemory;

  beforeEach(() => {
    userRepositoryInMemory = new UserRepositoryInMemory();
    userCreator = new UserCreator(userRepositoryInMemory);
  });

  test('Should create user when not exist in database', async () => {
    const user = new User(new UserId('32547dd7-617a-4985-a59a-91a176e55b83'), new UserName('Iván'));

    expect(await userCreator.run(user));
  });

  test('Should send error when create user that not have valid id', async () => {
    try {
      const user = new User(new UserId('not-valid-uuid'), new UserName('Iván'));
      await userCreator.run(user);
    } catch (error) {
      expect(error).toBeInstanceOf(UserIdNotvalid);
    }
  });

  test('Should send error when create user that exist', async () => {
    const user = new User(UserId.random(), new UserName('Iván'));

    userRepositoryInMemory.addUsers(user);

    try {
      await userCreator.run(user);
    } catch (error) {
      expect(error).toBeInstanceOf(UserAlreadyExists);
    }
  });
});
