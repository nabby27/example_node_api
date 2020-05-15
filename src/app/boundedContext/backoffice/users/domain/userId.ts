import { Uuid } from '../../../shared/domain/valueObjects/Uuid';

export class UserId extends Uuid {

    constructor(id: string) {
        super(id);
    }

}
