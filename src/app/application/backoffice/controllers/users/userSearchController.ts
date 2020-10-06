import { Request, Response } from 'express';
import { UserSearcher } from '../../../../boundedContext/backoffice/users/application/search/userSearcher';
import { User } from '../../../../boundedContext/backoffice/users/domain/user';
import { UserRepositoryPg } from '../../../../boundedContext/backoffice/users/infraestructure/persistence/userRepositoryPg';
import { HTTP_STATUS } from '../../../shared/constants/http_codes';

export class UserSearchController {

  private userSearcher: UserSearcher;
  private userRepositoryPg: UserRepositoryPg;

  constructor() {
    this.userRepositoryPg = new UserRepositoryPg();
    this.userSearcher = new UserSearcher(this.userRepositoryPg);
  }

  public async run(req: Request, res: Response) {
    this.userSearcher.run()
      .then((users: User[]) => {
        const usersResponse = users.map((user: User) => user.toResponse());
        res.status(HTTP_STATUS.SUCCESS).send(usersResponse);
      })
      .catch((error: any) => console.log(error));
  }

}
