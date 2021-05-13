import { BaseException } from '../../../../shared/domain/exceptions/baseException';
import { EXCEPTION_CODES } from '../../../../shared/domain/exceptions/exceptionCodes';
import { UserId } from '../valueObjects/userId';

export class UserNotFound extends BaseException {

  constructor(id: UserId) {
    const message = `error user with id ${id.getValue()} does not exist`;
    super(EXCEPTION_CODES.USER_NOT_FOUND, message);
  }

}
