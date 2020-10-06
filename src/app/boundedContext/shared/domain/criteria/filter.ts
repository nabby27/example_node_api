import { FilterField } from './filterField';
import { FilterOperator } from './filterOperator';
import { FilterValue } from './filterValue';

interface PlainFilter {
    field: string;
    operator: string;
    value: string;
}

export class Filter {

    private field: FilterField;
    private operator: FilterOperator;
    private value: FilterValue;

    constructor(field: FilterField, operator: FilterOperator, value: FilterValue) {
      this.field = field;
      this.operator = operator;
      this.value = value;
    }

    public static fromValues(values: PlainFilter): Filter {
      return new Filter(
        new FilterField(values.field),
        new FilterOperator(values.operator),
        new FilterValue(values.value)
      );
    }

    public getField(): FilterField {
      return this.field;
    }

    public getOperator(): FilterOperator {
      return this.operator;
    }

    public getValue(): FilterValue {
      return this.value;
    }

    public serialize(): string {
      return this.field.getValue() + '.' + this.operator.getValue() + '.' + this.value.getValue();
    }

}
