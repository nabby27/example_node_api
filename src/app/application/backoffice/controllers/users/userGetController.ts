import { Request, Response } from 'express';
import { UserSearcherOne } from '../../../../boundedContext/backoffice/users/application/search/userSearcherOne';
import { User } from '../../../../boundedContext/backoffice/users/domain/user';
import { UserId } from '../../../../boundedContext/backoffice/users/domain/userId';
import { UserRepositoryPg } from '../../../../boundedContext/backoffice/users/infraestructure/persistence/userRepositoryPg';

export class UserGetController {

    private userSearcherOne: UserSearcherOne;
    private userRepositoryPg: UserRepositoryPg;

    constructor() {
        this.userRepositoryPg = new UserRepositoryPg();
        this.userSearcherOne = new UserSearcherOne(this.userRepositoryPg);
    }

    public async run(req: Request, res: Response) {
        const id: UserId = new UserId(req.params.id);
        this.userSearcherOne.run(id)
            .then((user: User) => {
                res.status(200);
                res.send(user.toResponse());
            })
            .catch((error: any) => console.log(error));
    }

}
