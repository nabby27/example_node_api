export class Collection {

    private items: [];

    constructor(items: []) {
        this.items = items;
    }

    public count(): number {
        return this.items.length;
    }

    protected each(fn: CallableFunction): void {
        this.items.forEach((item) => fn(item));
    }

    protected getItems(): [] {
        return this.items;
    }

}
