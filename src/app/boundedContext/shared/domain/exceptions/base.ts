export class BaseException extends Error {

  constructor(
    protected _httpCode: number,
    protected _message: string
  ) {
    super();
  }

  get httpCode(): number {
    return this._httpCode;
  }

  set httpCode(httpCode: number) {
    this._httpCode = httpCode;
  }

  get message(): string {
    return this._message;
  }

  set message(message: string) {
    this._message = message;
  }

}
