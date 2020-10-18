import { Request, Response } from 'express';
import { UserUpdator } from '../../../../boundedContext/backoffice/users/application/userUpdator';
import { User } from '../../../../boundedContext/backoffice/users/domain/valueObjects/user';
import { UserId } from '../../../../boundedContext/backoffice/users/domain/valueObjects/userId';
import { UserName } from '../../../../boundedContext/backoffice/users/domain/valueObjects/userName';
import { UserRepositoryTypeORM } from '../../../../boundedContext/backoffice/users/infrastructure/persistence/userRepositoryTypeORM';
import { HTTP_STATUS } from '../../../shared/constants/http_codes';

export class UserUpdateController {

  private userUpdator: UserUpdator;
  private userRepositoryImpl: UserRepositoryTypeORM;

  constructor() {
    this.userRepositoryImpl = new UserRepositoryTypeORM();
    this.userUpdator = new UserUpdator(this.userRepositoryImpl);
  }

  public async run(req: Request, res: Response): Promise<void> {
    const user = new User(new UserId(req.params.id), new UserName(req.body.name));
    await this.userUpdator.run(user);
    res.status(HTTP_STATUS.SUCCESS).send();
  }

}
