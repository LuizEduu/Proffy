import { Router } from "express";
import ConnectionsController from "./../controllers/ConnectionsController";
const ConnectionRouter = Router();

const connectionsController = new ConnectionsController();

ConnectionRouter.post("/", connectionsController.create);
ConnectionRouter.get("/", connectionsController.index);

export default ConnectionRouter;
