import { Router } from 'express';
import usersRouter from '@useCases/users/infra/http/routes/users.routes';
import classesRouter from '@useCases/classes/infra/http/routes/classes.routes';
import sessionsRouter from '@useCases/users/infra/http/routes/sessions.routes';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/classes', classesRouter);
routes.use('/sessions', sessionsRouter);

export default routes;
