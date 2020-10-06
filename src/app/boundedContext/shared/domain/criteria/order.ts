import { OrderBy } from './orderBy';
import { OrderType } from './orderType';

export class Order {

    private orderBy: OrderBy;
    private orderType: OrderType;

    constructor(orderBy: OrderBy, orderType: OrderType) {
      this.orderBy = orderBy;
      this.orderType = orderType;
    }

    public static none(): Order {
      return new Order(new OrderBy(''), new OrderType(OrderType.NONE));
    }

    public static fromValues(orderBy?: string, orderType?: string): Order {
      if (orderBy === null || undefined === orderBy) {
        return Order.none();
      } if (orderType === null || undefined === orderType) {
        return new Order(new OrderBy(orderBy), new OrderType(OrderType.NONE));
      }

      return new Order(new OrderBy(orderBy), new OrderType(orderType));
    }

    public static createDesc(orderBy: OrderBy): Order {
      return new Order(orderBy, new OrderType(OrderType.DESC));
    }

    public getOrderBy(): OrderBy {
      return this.orderBy;
    }

    public getOrderType(): OrderType {
      return this.orderType;
    }

    public isNone(): boolean {
      return this.getOrderType().isNone();
    }

    public serialize(): string {
      return this.orderBy.getValue() + '.' + this.orderType.getValue();
    }

}
