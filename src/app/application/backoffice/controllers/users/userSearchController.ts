import { Request, Response } from 'express';
import { UserSearcher } from '../../../../boundedContext/backoffice/users/application/userSearcher';
import { User } from '../../../../boundedContext/backoffice/users/domain/dtos/user';
import { UserRepositoryTypeORM } from '../../../../boundedContext/backoffice/users/infraestructure/persistence/userRepositoryTypeORM';
import { HTTP_STATUS } from '../../../shared/constants/http_codes';

export class UserSearchController {

  private userSearcher: UserSearcher;
  private userRepositoryImpl: UserRepositoryTypeORM;

  constructor() {
    this.userRepositoryImpl = new UserRepositoryTypeORM();
    this.userSearcher = new UserSearcher(this.userRepositoryImpl);
  }

  public async run(req: Request, res: Response): Promise<void> {
    this.userSearcher.run()
      .then((users: User[]) => {
        const usersResponse = users.map((user: User) => user.toModel());
        res.status(HTTP_STATUS.SUCCESS).send(usersResponse);
      })
      .catch((error: Error) => console.log(error));
  }

}
