import { HTTP_STATUS } from '../../../../../application/shared/constants/http_codes';
import { BaseException } from '../../../../shared/domain/exceptions/base';

export class UserIdNotvalid extends BaseException {

  constructor(id: string) {
    const message = `error user id ${id} is not a user id valid`;
    super(HTTP_STATUS.BAD_REQUEST, message);
  }

}
