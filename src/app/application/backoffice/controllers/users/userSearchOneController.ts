import { Request, Response } from 'express';
import { UserSearcherOne } from '../../../../boundedContext/backoffice/users/application/userSearcherOne';
import { User } from '../../../../boundedContext/backoffice/users/domain/dtos/user';
import { UserId } from '../../../../boundedContext/backoffice/users/domain/dtos/userId';
import { UserRepositoryTypeORM } from '../../../../boundedContext/backoffice/users/infraestructure/persistence/userRepositoryTypeORM';
import { HTTP_STATUS } from '../../../shared/constants/http_codes';

export class UserSearchOneController {

  private userSearcherOne: UserSearcherOne;
  private userRepositoryImpl: UserRepositoryTypeORM;

  constructor() {
    this.userRepositoryImpl = new UserRepositoryTypeORM();
    this.userSearcherOne = new UserSearcherOne(this.userRepositoryImpl);
  }

  public run(req: Request, res: Response): void {
    const id: UserId = new UserId(req.params.id);
    this.userSearcherOne.run(id)
      .then((user: User) => {
        res.status(HTTP_STATUS.SUCCESS).send(user.toModel());
      })
      .catch((error: any) => console.log(error));
  }

}
