import { HTTP_STATUS } from '../../../../../app/application/shared/constants/http_codes';
import { BaseException } from '../../../../../app/boundedContext/shared/domain/exceptions/baseException';

// eslint-disable-next-line max-lines-per-function
describe('Unit test to Base exceptions', () => {
  const httpCode = HTTP_STATUS.BAD_REQUEST;
  const message = 'error';
  const baseException = new BaseException(httpCode, message);

  test('Should get http code', async () => {
    expect(baseException.exceptionCode).toEqual(httpCode);
  });

  test('Should get message', async () => {
    expect(baseException.message).toEqual(message);
  });
});
