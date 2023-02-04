import { Router } from "express";
import { CreateRoleController } from "../modules/roles/useCases/createRole/CreateRoleController";
import { ListRolesController } from "../modules/roles/useCases/listRoles/ListRolesControlles";

const rolesRoutes = Router();

const createRoleController = new CreateRoleController();
const listRolesController = new ListRolesController();

rolesRoutes.get("/", listRolesController.handle);

rolesRoutes.post("/", createRoleController.handle);

export { rolesRoutes };
