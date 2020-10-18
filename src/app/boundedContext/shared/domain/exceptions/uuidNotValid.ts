import { HTTP_STATUS } from '../../../../application/shared/constants/http_codes';
import { BaseException } from './base';

export class UuidNotValid extends BaseException {

  constructor(id: string) {
    const message = `error id ${id} is not a uuid valid`;
    super(HTTP_STATUS.BAD_REQUEST, message);
  }

}
