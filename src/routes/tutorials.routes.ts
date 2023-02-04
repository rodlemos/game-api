import { Router } from "express";
import { CreateTutorialController } from "../modules/turorials/useCases/createTutorial/CreateTutorialController";
import { FindTutorialBySlugController } from "../modules/turorials/useCases/findTutorialBySlug/FindTutorialBySlugController";
import { ListLatestTutorialsController } from "../modules/turorials/useCases/listLatestTutorials/ListLatestTutorialsController";
import { ListTutorialsController } from "../modules/turorials/useCases/listTutorials/ListTutorialsController";

const tutorialRoutes = Router();

const listTutorialsController = new ListTutorialsController();
const listLatestTutorialsController = new ListLatestTutorialsController();
const findTutorialBySlugController = new FindTutorialBySlugController();
const createTutorialController = new CreateTutorialController();

tutorialRoutes.get("/", listTutorialsController.handle);
tutorialRoutes.get("/latest", listLatestTutorialsController.handle);
tutorialRoutes.get("/:slug", findTutorialBySlugController.handle);

tutorialRoutes.post("/", createTutorialController.handle);

export { tutorialRoutes };
