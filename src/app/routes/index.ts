import express, { Request, Response, Router } from 'express';
import { UsersController } from '../controllers/usersController';

const router: Router = express.Router();

router.get('/', (req: Request, res: Response) => {
    res.send({ message: 'Wellcome to my node API' });
});

router.get('/users', (req: Request, res: Response) => {
    const users: UsersController = new UsersController();
    return users.showAllUsers(req, res);
});

export default router;
