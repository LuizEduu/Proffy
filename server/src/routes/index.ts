import { Router } from "express";

import usersRouter from "./users.routes";
import classesRouter from "./classes.routes";

const routes = Router();

routes.use("/users", usersRouter);
routes.use("/classes", classesRouter);

export default routes;
