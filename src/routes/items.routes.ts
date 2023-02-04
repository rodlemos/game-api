import { Router } from "express";
import { CreateItemController } from "../modules/items/useCases/createItem/CreateItemController";

const itemsRoutes = Router();

const createItemController = new CreateItemController();

itemsRoutes.post("/", createItemController.handle);

export { itemsRoutes };
