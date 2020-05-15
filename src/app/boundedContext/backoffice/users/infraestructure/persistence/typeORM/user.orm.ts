import { EntitySchema } from 'typeorm';
import { User } from '../../../domain/user';

export const UserSchema = new EntitySchema<User>({
    name: 'user',
    columns: {
        id: {
            type: Number,
            primary: true,
            generated: 'uuid',
        },
        name: {
            type: String,
        },
    },
});
