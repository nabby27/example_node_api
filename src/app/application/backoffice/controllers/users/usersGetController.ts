import { Request, Response } from 'express';
import { UserSearcher } from '../../../../boundedContext/backoffice/users/application/search/userSearcher';
import { User } from '../../../../boundedContext/backoffice/users/domain/user';
import { UserRepositoryPg } from '../../../../boundedContext/backoffice/users/infraestructure/persistence/userRepositoryPg';

export class UsersGetController {

    private userSearcher: UserSearcher;
    private userRepositoryPg: UserRepositoryPg;

    constructor() {
        this.userRepositoryPg = new UserRepositoryPg();
        this.userSearcher = new UserSearcher(this.userRepositoryPg);
    }

    public async run(req: Request, res: Response) {
        this.userSearcher.run()
            .then((users: User[]) => {
                res.status(200);
                res.send({users});
            })
            .catch((error) => console.log(error));
    }

}
