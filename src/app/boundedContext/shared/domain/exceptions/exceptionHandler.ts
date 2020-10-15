import { Response } from 'express';
import { HTTP_STATUS } from '../../../../application/shared/constants/http_codes';
import { BaseException } from './base';

export const exceptionHandler = (error: Error, res: Response): void => {
  if (error instanceof BaseException) {
    const { httpCode, message } = error as BaseException;
    res.status(httpCode).json({
      error: message
    });
  } else {
    res.status(HTTP_STATUS.SERVER_ERROR).json({
      error: 'Error not contemplated'
    });
  }
};
