import { HTTP_STATUS } from '../../../../../app/application/shared/constants/http_codes';
import { BaseException } from '../../../../../app/boundedContext/shared/domain/exceptions/base';

// eslint-disable-next-line max-lines-per-function
describe('Unit test to Base exceptions', () => {
  const httpCode = HTTP_STATUS.BAD_REQUEST;
  const message = 'error';
  const baseException = new BaseException(httpCode, message);

  test('Should get http code', async () => {
    expect(baseException.httpCode).toEqual(httpCode);
  });

  test('Should get message', async () => {
    expect(baseException.message).toEqual(message);
  });
});
