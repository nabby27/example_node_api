import { EntitySchema } from 'typeorm';
import { UserModel } from '../../../domain/models/user.model';

export const UserEntity = new EntitySchema<UserModel>({
  name: 'users',
  columns: {
    id: {
      primary: true,
      type: String,
      generated: undefined
    },
    name: {
      type: String
    }
  }
});
