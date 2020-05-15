import { StringValueObject } from '../../../shared/domain/valueObjects/stringValueObject';

export class UserName extends StringValueObject {

    constructor(value: string) {
        super(value);
    }

}
