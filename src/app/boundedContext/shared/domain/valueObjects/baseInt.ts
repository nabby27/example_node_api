export class BaseInt {

  protected value: number;

  constructor(value: number) {
    this.value = value;
  }

  getValue(): number {
    return this.value;
  }

  toString(): string {
    return this.getValue().toString();
  }

}
