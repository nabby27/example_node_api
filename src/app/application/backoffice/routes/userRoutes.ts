import express, { Request, Response, Router } from 'express';
import { UsersGetController } from '../controllers/users/usersGetController';

const router: Router = express.Router();

router.get('/users', (req: Request, res: Response) => {
    const usersGetController: UsersGetController = new UsersGetController();
    return usersGetController.run(req, res);
});

export default router;
