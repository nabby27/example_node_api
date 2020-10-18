import { AggregateRoot } from '../../../../shared/domain/aggregate/aggregateRoot';
import { UserModel } from '../models/user.model';
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

  public getId(): UserId {
    return this.id;
  }

  public getName(): UserName {
    return this.name;
  }

  public getValueId(): string {
    return this.id.getValue();
  }

  public getValueName(): string {
    return this.name.getValue();
  }

  public toModel(): UserModel {
    return {
      id: this.getValueId(),
      name: this.getValueName()
    };
  }

}
