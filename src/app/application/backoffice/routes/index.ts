import { Application } from 'express';
import userRouter from './userRoutes';

export default (app: Application, prefix: string) => {
    app.use(prefix, userRouter);
};
