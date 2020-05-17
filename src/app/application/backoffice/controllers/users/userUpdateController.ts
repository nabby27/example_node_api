import { Request, Response } from 'express';
import { UserUpdator } from '../../../../boundedContext/backoffice/users/application/search/userUpdator';
import { User } from '../../../../boundedContext/backoffice/users/domain/user';
import { UserId } from '../../../../boundedContext/backoffice/users/domain/userId';
import { UserName } from '../../../../boundedContext/backoffice/users/domain/userName';
import { UserRepositoryPg } from '../../../../boundedContext/backoffice/users/infraestructure/persistence/userRepositoryPg';

export class UserUpdateController {

    private userUpdator: UserUpdator;
    private userRepositoryPg: UserRepositoryPg;

    constructor() {
        this.userRepositoryPg = new UserRepositoryPg();
        this.userUpdator = new UserUpdator(this.userRepositoryPg);
    }

    public run(req: Request, res: Response): void {
        const user = new User(new UserId(req.params.id), new UserName(req.body.name));
        this.userUpdator.run(user);
        res.status(200).send();
    }

}
