import { Request, Response } from 'express';
import { UserCreator } from '../../../../boundedContext/backoffice/users/application/userCreator';
import { User } from '../../../../boundedContext/backoffice/users/domain/dtos/user';
import { UserId } from '../../../../boundedContext/backoffice/users/domain/dtos/userId';
import { UserName } from '../../../../boundedContext/backoffice/users/domain/dtos/userName';
import { UserRepositoryTypeORM } from '../../../../boundedContext/backoffice/users/infraestructure/persistence/userRepositoryTypeORM';
import { HTTP_STATUS } from '../../../shared/constants/http_codes';

export class UserCreateController {

  private userCreator: UserCreator;
  private userRepositoryImpl: UserRepositoryTypeORM;

  constructor() {
    this.userRepositoryImpl = new UserRepositoryTypeORM();
    this.userCreator = new UserCreator(this.userRepositoryImpl);
  }

  public run(req: Request, res: Response): void {
    const user = new User(new UserId(req.params.id), new UserName(req.body.name));
    this.userCreator.run(user);
    res.status(HTTP_STATUS.CREATED).send();
  }

}
