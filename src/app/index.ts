import dotenv from 'dotenv';
import helmet from 'helmet';
import express, { Application, NextFunction, Request, Response } from 'express';
import morgan from 'morgan';
import 'reflect-metadata';
import { createConnection } from 'typeorm';
import backofficeRoutes from './application/backoffice/routes';
import { exceptionHandler } from './application/shared/middlewares/exceptionHandler';

dotenv.config({ path: __dirname + '/../../.env' });

createConnection('backoffice');

const app: Application = express();
const port = process.env.NODE_PORT;

app.use(helmet());
app.use(morgan('combined'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

backofficeRoutes(app, '/backoffice');

app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
  exceptionHandler(error, res);
  next();
});

app.listen(port, () => {
  console.info('server run on port: ' + port);
});

export default app;
