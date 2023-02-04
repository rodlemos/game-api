import { Router } from "express";
import { championsRoutes } from "./champions.routes";
import { guidesRoutes } from "./guides.routes";
import { itemsRoutes } from "./items.routes";
import { rolesRoutes } from "./roles.routes";
import { tutorialRoutes } from "./tutorials.routes";

const routes = Router();

routes.use("/champions", championsRoutes);
routes.use("/roles", rolesRoutes);
routes.use("/items", itemsRoutes);
routes.use("/tutorials", tutorialRoutes);
routes.use("/guides", guidesRoutes);

export { routes };

