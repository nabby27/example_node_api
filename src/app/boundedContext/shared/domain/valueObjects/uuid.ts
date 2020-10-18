import { v4 as uuidv4 } from 'uuid';
import { UuidNotValid } from '../exceptions/uuidNotValid';

export class Uuid {

  protected value: string;

  constructor(value: string) {
    this.ensureIsValidUuid(value);
    this.value = value;
  }

  static random(): Uuid {
    return new Uuid(uuidv4());
  }

  getValue(): string {
    return this.value;
  }

  equals(other: Uuid): boolean {
    return this.getValue() === other.getValue();
  }

  private ensureIsValidUuid(id: string): void {
    const regexUuidV4 = '^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$';
    if (!id.match(regexUuidV4)) {
      throw new UuidNotValid(id);
    }
  }

}
