import { Collection } from '../collection';

export class Filters extends Collection {

    constructor(values: []) {
        super(values);
    }

    public getFilters(): [] {
        return this.getItems();
    }

    public serialize(): string {
        return this.getItems().join('^');
    }

}
