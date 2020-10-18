import { Request, Response } from 'express';
import { UserCreator } from '../../../../boundedContext/backoffice/users/application/userCreator';
import { User } from '../../../../boundedContext/backoffice/users/domain/valueObjects/user';
import { UserId } from '../../../../boundedContext/backoffice/users/domain/valueObjects/userId';
import { UserName } from '../../../../boundedContext/backoffice/users/domain/valueObjects/userName';
import { UserRepositoryTypeORM } from '../../../../boundedContext/backoffice/users/infrastructure/persistence/userRepositoryTypeORM';
import { HTTP_STATUS } from '../../../shared/constants/http_codes';

export class UserCreateController {

  private userCreator: UserCreator;
  private userRepositoryImpl: UserRepositoryTypeORM;

  constructor() {
    this.userRepositoryImpl = new UserRepositoryTypeORM();
    this.userCreator = new UserCreator(this.userRepositoryImpl);
  }

  public async run(req: Request, res: Response): Promise<void> {
    const user = new User(new UserId(req.body.id), new UserName(req.body.name));
    await this.userCreator.run(user);
    res.status(HTTP_STATUS.CREATED).send();
  }

}
