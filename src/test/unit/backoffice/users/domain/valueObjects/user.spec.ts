import { User } from '../../../../../../app/boundedContext/backoffice/users/domain/valueObjects/user';
import { UserId } from '../../../../../../app/boundedContext/backoffice/users/domain/valueObjects/userId';
import { UserName } from '../../../../../../app/boundedContext/backoffice/users/domain/valueObjects/userName';

// eslint-disable-next-line max-lines-per-function
describe('Unit test to User Updater Application Service', () => {
  const userId: UserId = new UserId('32547dd7-617a-4985-a59a-91a176e55b83');
  const userName: UserName = new UserName('Iván');
  const user: User = new User(userId, userName);

  test('Should return UserId when call method getId()', async () => {
    expect(user.getId()).toBeInstanceOf(UserId);
    expect(user.getId()).toEqual(userId);
  });

  test('Should return UserName when call method getName()', async () => {
    expect(user.getName()).toBeInstanceOf(UserName);
    expect(user.getName()).toEqual(userName);
  });

  test('Should return UserName value when call method getValueName()', async () => {
    expect(user.getValueName()).toEqual('Iván');
  });

  test('Should return UserId value when call method getValueId()', async () => {
    expect(user.getValueId()).toEqual('32547dd7-617a-4985-a59a-91a176e55b83');
  });

  test('Should return user model when call method toModel()', async () => {
    expect(user.toModel()).toEqual({
      id: '32547dd7-617a-4985-a59a-91a176e55b83',
      name: 'Iván'
    });
  });
});
