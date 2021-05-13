import { Response } from 'express';
import { HTTP_STATUS } from '../constants/http_codes';
import { BaseException } from '../../../boundedContext/shared/domain/exceptions/baseException';
import { EXCEPTION_CODES } from '../../../boundedContext/shared/domain/exceptions/exceptionCodes';

const mapErrorCodeToHTTPCode = (error: BaseException): number => {
  // eslint-disable-next-line default-case
  switch (error.exceptionCode) {
    case EXCEPTION_CODES.USER_ALREADY_EXISTS:
      return HTTP_STATUS.CONFLICT;
    case EXCEPTION_CODES.USER_ID_NOT_VALID:
      return HTTP_STATUS.BAD_REQUEST;
    case EXCEPTION_CODES.USER_NOT_FOUND:
      return HTTP_STATUS.NOT_FOUND;
    case EXCEPTION_CODES.UUID_NOT_VALID:
      return HTTP_STATUS.BAD_REQUEST;
  }
};


export const exceptionHandler = (error: Error, res: Response): void => {
  if (error instanceof BaseException) {
    const { message } = error as BaseException;

    const httpCode = mapErrorCodeToHTTPCode(error);

    res.status(httpCode).json({
      error: message
    });
  } else {
    res.status(HTTP_STATUS.SERVER_ERROR).json({
      error: 'Error not contemplated',
      name: error.name,
      message: error.message,
      stack: error.stack
    });
  }
};
