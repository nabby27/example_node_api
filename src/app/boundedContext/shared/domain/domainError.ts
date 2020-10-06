export class DomainError {

    protected errorCode: number;
    protected errorMessage: string;

    constructor(errorCode: number, errorMessage: string) {
      this.errorCode = errorCode;
      this.errorMessage = errorMessage;
    }

    public getErrorCode(): number {
      return this.errorCode;
    }

    protected getErrorMessage(): string {
      return this.errorMessage;
    }

}
