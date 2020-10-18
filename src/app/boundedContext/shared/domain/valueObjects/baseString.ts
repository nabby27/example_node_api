export class BaseString {

  protected value: string;

  constructor(value: string) {
    this.value = value;
  }

  public getValue(): string {
    return this.value;
  }

  public equals(other: string): boolean {
    return this.value === other;
  }

  public toString(): string {
    return this.getValue();
  }

}
