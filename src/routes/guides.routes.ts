import { Router } from "express";
import { CreateGuideController } from "../modules/guides/useCases/createGuide/CreateGuideController";
import { FindGuideBySlugController } from "../modules/guides/useCases/findGuideBySlug/FindGuideBySlugController";
import { ListGuidesController } from "../modules/guides/useCases/listGuides/ListGuidesController";
import { ListLatestGuidesController } from "../modules/guides/useCases/listLatestGuides/ListLatestGuidesController";

const guidesRoutes = Router();

const listGuidesController = new ListGuidesController();
const listLatestGuidesController = new ListLatestGuidesController();
const findGuideBySlugController = new FindGuideBySlugController();
const createGuideController = new CreateGuideController();

guidesRoutes.get("/", listGuidesController.handle);
guidesRoutes.get("/latest", listLatestGuidesController.handle);
guidesRoutes.get("/:slug", findGuideBySlugController.handle);

guidesRoutes.post("/", createGuideController.handle);

export { guidesRoutes };
