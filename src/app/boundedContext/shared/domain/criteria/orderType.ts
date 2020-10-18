import { BaseEnum } from '../valueObjects/baseEnum';

export class OrderType extends BaseEnum {

  public static readonly ASC = 'asc';
  public static readonly DESC = 'desc';
  public static readonly NONE = 'none';

  constructor(value: string) {
    super(value);
  }

  public isNone(): boolean {
    return this.equals(OrderType.NONE);
  }

}
