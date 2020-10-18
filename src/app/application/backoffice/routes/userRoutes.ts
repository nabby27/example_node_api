import express, { Request, Response, Router } from 'express';
import { asyncHandler } from '../../shared/framework/utils/asyncHandler';
import { UserCreateController } from '../controllers/users/userCreateController';
import { UserDeleteController } from '../controllers/users/userDeleteController';
import { UserSearchController } from '../controllers/users/userSearchController';
import { UserSearchOneController } from '../controllers/users/userSearchOneController';
import { UserUpdateController } from '../controllers/users/userUpdateController';

const router: Router = express.Router();

router.get('/users/:id', asyncHandler((req: Request, res: Response) => {
  const userSearchOneController: UserSearchOneController = new UserSearchOneController();

  return userSearchOneController.run(req, res);
}));

router.get('/users', asyncHandler((req: Request, res: Response) => {
  const userSearchController: UserSearchController = new UserSearchController();

  return userSearchController.run(req, res);
}));

router.post('/users', asyncHandler((req: Request, res: Response) => {
  const userCreateController: UserCreateController = new UserCreateController();

  return userCreateController.run(req, res);
}));

router.put('/users/:id', asyncHandler((req: Request, res: Response) => {
  const userUpdateController: UserUpdateController = new UserUpdateController();

  return userUpdateController.run(req, res);
}));

router.delete('/users/:id', asyncHandler((req: Request, res: Response) => {
  const userDeleteController: UserDeleteController = new UserDeleteController();

  return userDeleteController.run(req, res);
}));

export default router;
