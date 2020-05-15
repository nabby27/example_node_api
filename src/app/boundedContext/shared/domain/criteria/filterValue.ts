import { StringValueObject } from '../valueObjects/stringValueObject';
import { FilterOperator } from './filterOperator';

export class FilterValue extends StringValueObject {

    constructor(value: string) {
        super(value);
    }

}
