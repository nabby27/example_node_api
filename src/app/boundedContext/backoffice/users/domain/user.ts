import { AggregateRoot } from '../../../shared/domain/aggregate/aggregateRoot';
import { UserId } from './userId';
import { UserName } from './userName';

export class User extends AggregateRoot {

    private id: UserId;
    private name: UserName;

    constructor(id: UserId, name: UserName) {
        super();
        this.id = id;
        this.name = name;
    }

    public toResponse(): object {
        return {
            id: this.id.getValue(),
            name: this.name.getValue(),
        };
    }

}
