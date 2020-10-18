import { Request, Response } from 'express';
import { UserSearcher } from '../../../../boundedContext/backoffice/users/application/userSearcher';
import { User } from '../../../../boundedContext/backoffice/users/domain/valueObjects/user';
import { UserRepositoryTypeORM } from '../../../../boundedContext/backoffice/users/infrastructure/persistence/userRepositoryTypeORM';
import { HTTP_STATUS } from '../../../shared/constants/http_codes';

export class UserSearchController {

  private userSearcher: UserSearcher;
  private userRepositoryImpl: UserRepositoryTypeORM;

  constructor() {
    this.userRepositoryImpl = new UserRepositoryTypeORM();
    this.userSearcher = new UserSearcher(this.userRepositoryImpl);
  }

  public async run(req: Request, res: Response): Promise<void> {
    const users = await this.userSearcher.run();
    const usersResponse = users.map((user: User) => user.toModel());
    res.status(HTTP_STATUS.SUCCESS).send(usersResponse);
  }

}
