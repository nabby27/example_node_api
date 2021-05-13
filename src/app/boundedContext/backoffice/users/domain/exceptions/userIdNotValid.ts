import { BaseException } from '../../../../shared/domain/exceptions/baseException';
import { EXCEPTION_CODES } from '../../../../shared/domain/exceptions/exceptionCodes';

export class UserIdNotvalid extends BaseException {

  constructor(id: string) {
    const message = `error user id ${id} is not a user id valid`;
    super(EXCEPTION_CODES.USER_ID_NOT_VALID, message);
  }

}
