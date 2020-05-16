import express, { Request, Response, Router } from 'express';
import { UserGetController } from '../controllers/users/userGetController';
import { UsersGetController } from '../controllers/users/usersGetController';

const router: Router = express.Router();

router.get('/users', (req: Request, res: Response) => {
    const usersGetController: UsersGetController = new UsersGetController();
    return usersGetController.run(req, res);
});

router.get('/users/:id', (req: Request, res: Response) => {
    const userGetController: UserGetController = new UserGetController();
    return userGetController.run(req, res);
});

export default router;
