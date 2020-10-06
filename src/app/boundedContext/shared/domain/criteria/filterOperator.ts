import { Enum } from '../valueObjects/enum';

export class FilterOperator extends Enum {

  constructor(value: string) {
    super(value);
  }

    static readonly EQUAL = '=';
    static readonly NOT_EQUAL = '!=';
    static readonly GT = '>';
    static readonly LT = '<';
    static readonly CONTAINS = 'CONTAINS';
    static readonly NOT_CONTAINS = 'NOT_CONTAINS';
    private static containing = [FilterOperator.CONTAINS, FilterOperator.NOT_CONTAINS];

    public static equal(): FilterOperator {
      return new FilterOperator('=');
    }

}
