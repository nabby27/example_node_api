import { BaseException } from './baseException';
import { EXCEPTION_CODES } from './exceptionCodes';

export class UuidNotValid extends BaseException {

  constructor(id: string) {
    const message = `error id ${id} is not a uuid valid`;
    super(EXCEPTION_CODES.UUID_NOT_VALID, message);
  }

}
