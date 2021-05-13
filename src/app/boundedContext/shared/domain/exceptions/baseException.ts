import { EXCEPTION_CODES } from './exceptionCodes';

export class BaseException extends Error {

  constructor(
    protected _exceptionCode: EXCEPTION_CODES,
    protected _message: string
  ) {
    super();
  }

  get exceptionCode(): EXCEPTION_CODES {
    return this._exceptionCode;
  }

  get message(): string {
    return this._message;
  }

}
