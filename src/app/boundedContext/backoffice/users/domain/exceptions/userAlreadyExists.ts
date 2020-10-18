import { HTTP_STATUS } from '../../../../../application/shared/constants/http_codes';
import { BaseException } from '../../../../shared/domain/exceptions/base';
import { User } from '../valueObjects/user';

export class UserAlreadyExists extends BaseException {

  constructor(user: User) {
    const message = `error creating user with id ${user.getValueId()}, user already exists`;
    super(HTTP_STATUS.CONFLICT, message);
  }

}
