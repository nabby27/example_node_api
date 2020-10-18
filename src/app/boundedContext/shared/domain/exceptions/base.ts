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

  get message(): string {
    return this._message;
  }

}
