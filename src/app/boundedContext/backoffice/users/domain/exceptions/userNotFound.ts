import { HTTP_STATUS } from '../../../../../application/shared/constants/http_codes';
import { BaseException } from '../../../../shared/domain/exceptions/base';
import { UserId } from '../valueObjects/userId';

export class UserNotFound extends BaseException {

  constructor(id: UserId) {
    const message = `error user with id ${id.getValue()} does not exist`;
    super(HTTP_STATUS.NOT_FOUND, message);
  }

}
