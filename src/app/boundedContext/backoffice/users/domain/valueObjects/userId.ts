import { Uuid } from '../../../../shared/domain/valueObjects/uuid';
import { UserIdNotvalid } from '../exceptions/userIdNotValid';

export class UserId extends Uuid {

  constructor(id: string) {
    try {
      super(id);
    } catch (error) {
      throw new UserIdNotvalid(id);
    }
  }

}
