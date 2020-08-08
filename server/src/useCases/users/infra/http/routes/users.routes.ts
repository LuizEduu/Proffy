import { Router } from 'express';

import UsersController from '../controllers/UserController';

const usersRouter = Router();
const usersController = new UsersController();

usersRouter.post('/', usersController.create);

usersRouter.get('/', (request, response) => {
  response.send('ok get');
});

export default usersRouter;
