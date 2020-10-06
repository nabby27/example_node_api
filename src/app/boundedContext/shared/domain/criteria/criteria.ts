import { Filter } from './filter';
import { Filters } from './filters';
import { Order } from './order';

export class Criteria {

  private filters: Filters;
  private order: Order;
  private offset?: number;
  private limit?: number;

  constructor(filters: Filters, order: Order, offset?: number, limit?: number) {
    this.filters = filters;
    this.order = order;
    this.offset = offset;
    this.limit = limit;
  }

  public hasFilters(): boolean {
    const zero = 0;

    return this.filters.count() > zero;
  }

  public hasOrder(): boolean {
    return !this.order.isNone();
  }

  public plainFilters(): Filter[] {
    return this.filters.getFilters();
  }

  public getFilters(): Filters {
    return this.filters;
  }

  public getOrder(): Order {
    return this.order;
  }

  public getOffset(): number | undefined {
    return this.offset;
  }

  public getLimit(): number | undefined {
    return this.limit;
  }

  public serialize(): string {
    return this.filters.serialize() + '~~' +
      this.order.serialize() + '~~' +
      this.offset + '~~' +
      this.limit;
  }

}
