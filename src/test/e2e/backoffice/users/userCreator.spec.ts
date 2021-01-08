import supertest from 'supertest';
import app from '../../../../app';
import { HTTP_STATUS } from '../../../../app/application/shared/constants/http_codes';

// eslint-disable-next-line max-lines-per-function
describe('Unit test to User Creator Application service', () => {
  test('Should create user when not exist in database', async () => {
    supertest(app)
      .post('/backoffice/users')
      .send({ name: 'john' })
      .expect(HTTP_STATUS.CREATED);
  });
});
