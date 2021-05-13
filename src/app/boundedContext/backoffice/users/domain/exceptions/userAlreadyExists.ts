import { BaseException } from '../../../../shared/domain/exceptions/baseException';
import { EXCEPTION_CODES } from '../../../../shared/domain/exceptions/exceptionCodes';
import { User } from '../valueObjects/user';

export class UserAlreadyExists extends BaseException {

  constructor(user: User) {
    const message = `error user with id ${user.getValueId()} already exists`;
    super(EXCEPTION_CODES.USER_ALREADY_EXISTS, message);
  }

}
