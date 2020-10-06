import { Request, Response } from 'express';
import { UserSearcherOne } from '../../../../boundedContext/backoffice/users/application/search/userSearcherOne';
import { User } from '../../../../boundedContext/backoffice/users/domain/user';
import { UserId } from '../../../../boundedContext/backoffice/users/domain/userId';
import { UserRepositoryPg } from '../../../../boundedContext/backoffice/users/infraestructure/persistence/userRepositoryPg';
import { HTTP_STATUS } from '../../../shared/constants/http_codes';

export class UserSearchOneController {

  private userSearcherOne: UserSearcherOne;
  private userRepositoryPg: UserRepositoryPg;

  constructor() {
    this.userRepositoryPg = new UserRepositoryPg();
    this.userSearcherOne = new UserSearcherOne(this.userRepositoryPg);
  }

  public run(req: Request, res: Response): void {
    const id: UserId = new UserId(req.params.id);
    this.userSearcherOne.run(id)
      .then((user: User) => {
        res.status(HTTP_STATUS.SUCCESS).send(user.toResponse());
      })
      .catch((error: any) => console.log(error));
  }

}
