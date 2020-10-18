import { Request, Response } from 'express';
import { UserDelator } from '../../../../boundedContext/backoffice/users/application/userDelator';
import { UserId } from '../../../../boundedContext/backoffice/users/domain/valueObjects/userId';
import { UserRepositoryTypeORM } from '../../../../boundedContext/backoffice/users/infrastructure/persistence/userRepositoryTypeORM';
import { HTTP_STATUS } from '../../../shared/constants/http_codes';

export class UserDeleteController {

  private userDelator: UserDelator;
  private userRepositoryImpl: UserRepositoryTypeORM;

  constructor() {
    this.userRepositoryImpl = new UserRepositoryTypeORM();
    this.userDelator = new UserDelator(this.userRepositoryImpl);
  }

  public async run(req: Request, res: Response): Promise<void> {
    await this.userDelator.run(new UserId(req.params.id));
    res.status(HTTP_STATUS.SUCCESS).send();
  }

}
