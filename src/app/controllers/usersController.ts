import { Request, Response } from 'express';
import { ShowAllUsersAction } from '../domain/users/actions/showAllUsersAction';
import { UserRepositoryImpl } from '../infraestructure/repositories/userRepositoryImpl';

export class UsersController {

    private showAllUsersAction: ShowAllUsersAction;
    private userRepositoryImpl: UserRepositoryImpl;

    constructor() {
        this.showAllUsersAction = new ShowAllUsersAction();
        this.userRepositoryImpl = new UserRepositoryImpl();
    }

    public async showAllUsers(req: Request, res: Response) {
        this.showAllUsersAction.execute(this.userRepositoryImpl)
            .then((users) => {
                res.status(200);
                res.send({users});
            });
    }

}
