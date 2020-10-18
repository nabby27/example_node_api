export class Collection<ItemsType> {

  private items: ItemsType[];

  constructor(items: ItemsType[]) {
    this.items = items;
  }

  public count(): number {
    return this.items.length;
  }

  protected each(fn: CallableFunction): void {
    this.items.forEach((item) => fn(item));
  }

  protected getItems(): ItemsType[] {
    return this.items;
  }

}
