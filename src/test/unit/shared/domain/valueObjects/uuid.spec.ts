import { UuidNotValid } from '../../../../../app/boundedContext/shared/domain/exceptions/uuidNotValid';
import { Uuid } from '../../../../../app/boundedContext/shared/domain/valueObjects/uuid';

// eslint-disable-next-line max-lines-per-function
describe('Unit test to UUID Value Object', () => {
  test('Should get uuid when is valid', async () => {
    const validUuidAsString = '32547dd7-617a-4985-a59a-91a176e55b83';
    expect(new Uuid(validUuidAsString));
  });

  test('Should send error when uuid is not valid', async () => {
    try {
      const uuid = new Uuid('example-invalid-uuid');
      expect(uuid).toThrow();
    } catch (error) {
      expect(error).toBeInstanceOf(UuidNotValid);
    }
  });

  test('Should get true if uuid on method equals is the same', async () => {
    const validUuidAsString = '32547dd7-617a-4985-a59a-91a176e55b83';
    const uuid = new Uuid(validUuidAsString);

    expect(uuid.equals(new Uuid(validUuidAsString))).toBe(true);
  });

  test('Should get false if uuid on method equals is not the same', async () => {
    const validUuidAsString = '32547dd7-617a-4985-a59a-91a176e55b83';
    const uuid = new Uuid(validUuidAsString);

    expect(uuid.equals(new Uuid('43ba0b24-4d0b-40f7-aa7f-1b2a3058f484'))).toBe(false);
  });
});
