import { Collection } from '../collection';
import { Filter } from './filter';

export class Filters extends Collection<Filter> {

  constructor(items: Filter[]) {
    super(items);
  }

  public add(filter: Filter): Filters {
    const filters = this.getFilters();
    filters.push(filter);

    return new Filters(filters);
  }

  public getFilters(): Filter[] {
    return this.getItems();
  }

  public serialize(): string {
    return this.getItems().join('^');
  }

}
