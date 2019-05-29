import { ShowAllUsersAction } from '../../app/domain/users/actions/showAllUsersAction';
import { UserEntity } from '../../app/domain/users/entities/user.entity';
import { UserRepositoryInMemory } from './repositories/userRepositoryInMemory';

describe('Unit test to Show All Users', () => {

    let showAllUsersAction: any;
    let userRepositoryInMemory: any;

    beforeEach(() => {
        showAllUsersAction = new ShowAllUsersAction();
        userRepositoryInMemory = new UserRepositoryInMemory();
    });

    it('Should get empty users when there aren\'t', async () => {
        const usersExpected: UserEntity[] = [];

        const users = await getAllUsers(usersExpected);

        expect(usersExpected).toEqual(users);
    });

    it('Should get all users when have 2', async () => {
        const usersExpected: any[] = [
            { id: 1, name: 'Nabby' },
            { id: 2, name: 'John Papa'},
        ];

        const users = await getAllUsers(usersExpected);

        expect(usersExpected).toEqual(users);
    });

    async function getAllUsers(users: UserEntity[]): Promise<UserEntity[]> {
        userRepositoryInMemory.setUsers(users);
        return await showAllUsersAction.execute(userRepositoryInMemory);
    }

});
