import { Request, Response } from 'express';
import { UserUpdator } from '../../../../boundedContext/backoffice/users/application/userUpdator';
import { User } from '../../../../boundedContext/backoffice/users/domain/dtos/user';
import { UserId } from '../../../../boundedContext/backoffice/users/domain/dtos/userId';
import { UserName } from '../../../../boundedContext/backoffice/users/domain/dtos/userName';
import { UserRepositoryTypeORM } from '../../../../boundedContext/backoffice/users/infraestructure/persistence/userRepositoryTypeORM';
import { HTTP_STATUS } from '../../../shared/constants/http_codes';

export class UserUpdateController {

  private userUpdator: UserUpdator;
  private userRepositoryImpl: UserRepositoryTypeORM;

  constructor() {
    this.userRepositoryImpl = new UserRepositoryTypeORM();
    this.userUpdator = new UserUpdator(this.userRepositoryImpl);
  }

  public run(req: Request, res: Response): void {
    const user = new User(new UserId(req.params.id), new UserName(req.body.name));
    this.userUpdator.run(user);
    res.status(HTTP_STATUS.SUCCESS).send();
  }

}
