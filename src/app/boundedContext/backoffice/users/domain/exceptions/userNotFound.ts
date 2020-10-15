import { BaseException } from '../../../../shared/domain/exceptions/base';

export class UserNotFound extends BaseException {

  constructor(httpCode: number, message: string) {
    super(httpCode, message);
  }

}
