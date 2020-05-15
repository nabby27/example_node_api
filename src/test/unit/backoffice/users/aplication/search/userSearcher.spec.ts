import { UserSearcher } from '../../../../../../app/boundedContext/backoffice/users/application/search/userSearcher';
import { User } from '../../../../../../app/boundedContext/backoffice/users/domain/user';
import { UserRepositoryInMemory } from '../../infraestructure/persistence/userRepositoryInMemory';

describe('Unit test to User Search', () => {

    let userSearcher: UserSearcher;
    let userRepositoryInMemory: UserRepositoryInMemory;

    beforeEach(() => {
        userRepositoryInMemory = new UserRepositoryInMemory();
        userSearcher = new UserSearcher(userRepositoryInMemory);
    });

    it('Should get empty users when there aren\'t', async () => {
        const usersExpected: User[] = [];
        userRepositoryInMemory.setUsers(usersExpected);

        const users = await userSearcher.run();

        expect(usersExpected).toEqual(users);
    });

    it('Should get all users when have 2', async () => {
        const usersExpected: any[] = [
            { id: 1, name: 'Nabby' },
            { id: 2, name: 'John Papa'},
        ];
        userRepositoryInMemory.setUsers(usersExpected);

        const users = await userSearcher.run();

        expect(usersExpected).toEqual(users);
    });

});
