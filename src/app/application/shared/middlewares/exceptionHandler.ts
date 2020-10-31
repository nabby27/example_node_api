import { Response } from 'express';
import { HTTP_STATUS } from '../constants/http_codes';
import { BaseException } from '../../../boundedContext/shared/domain/exceptions/base';

export const exceptionHandler = (error: Error, res: Response): void => {
  if (error instanceof BaseException) {
    const { httpCode, message } = error as BaseException;
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
