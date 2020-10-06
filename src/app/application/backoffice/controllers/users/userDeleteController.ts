import { Request, Response } from 'express';
import { UserDelator } from '../../../../boundedContext/backoffice/users/application/search/userDelator';
import { UserId } from '../../../../boundedContext/backoffice/users/domain/userId';
import { UserRepositoryPg } from '../../../../boundedContext/backoffice/users/infraestructure/persistence/userRepositoryPg';
import { HTTP_STATUS } from '../../../shared/constants/http_codes';

export class UserDeleteController {

  private userDelator: UserDelator;
  private userRepositoryPg: UserRepositoryPg;

  constructor() {
    this.userRepositoryPg = new UserRepositoryPg();
    this.userDelator = new UserDelator(this.userRepositoryPg);
  }

  public run(req: Request, res: Response): void {
    this.userDelator.run(new UserId(req.params.id));
    res.status(HTTP_STATUS.SUCCESS).send();
  }

}
