import { Request, Response } from 'express';
import { UserSearcherOne } from '../../../../boundedContext/backoffice/users/application/userSearcherOne';
import { UserId } from '../../../../boundedContext/backoffice/users/domain/valueObjects/userId';
import { UserRepositoryTypeORM } from '../../../../boundedContext/backoffice/users/infrastructure/persistence/userRepositoryTypeORM';
import { HTTP_STATUS } from '../../../shared/constants/http_codes';

export class UserSearchOneController {

  private userSearcherOne: UserSearcherOne;
  private userRepositoryImpl: UserRepositoryTypeORM;

  constructor() {
    this.userRepositoryImpl = new UserRepositoryTypeORM();
    this.userSearcherOne = new UserSearcherOne(this.userRepositoryImpl);
  }

  public async run(req: Request, res: Response): Promise<void> {
    const id: UserId = new UserId(req.params.id);
    const user = await this.userSearcherOne.run(id);
    res.status(HTTP_STATUS.SUCCESS).send(user.toModel());
  }

}
