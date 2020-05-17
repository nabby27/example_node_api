import { Request, Response } from 'express';
import { UserCreator } from '../../../../boundedContext/backoffice/users/application/search/userCreator';
import { User } from '../../../../boundedContext/backoffice/users/domain/user';
import { UserId } from '../../../../boundedContext/backoffice/users/domain/userId';
import { UserName } from '../../../../boundedContext/backoffice/users/domain/userName';
import { UserRepositoryPg } from '../../../../boundedContext/backoffice/users/infraestructure/persistence/userRepositoryPg';

export class UserCreateController {

    private userCreator: UserCreator;
    private userRepositoryPg: UserRepositoryPg;

    constructor() {
        this.userRepositoryPg = new UserRepositoryPg();
        this.userCreator = new UserCreator(this.userRepositoryPg);
    }

    public run(req: Request, res: Response): void {
        const user = new User(new UserId(req.params.id), new UserName(req.body.name));
        this.userCreator.run(user);
        res.status(201).send();
    }

}
