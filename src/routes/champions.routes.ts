import { Router } from "express";
import { CreateChampionController } from "../modules/champions/useCases/createChampion/CreateChampionController";

const championsRoutes = Router();

const createChampionController = new CreateChampionController();

championsRoutes.post("/", createChampionController.handle);

export { championsRoutes };