export class Collection {

    private items: any[];

    constructor(items: any[]) {
      this.items = items;
    }

    public count(): number {
      return this.items.length;
    }

    protected each(fn: CallableFunction): void {
      this.items.forEach((item) => fn(item));
    }

    protected getItems(): any[] {
      return this.items;
    }

}
