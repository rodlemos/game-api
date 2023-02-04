import { Request, Response } from "express";
import { ListRolesUseCase } from "./ListRolesUseCase";

export class ListRolesController {
  async handle(Req: Request, res: Response) {
    const listRolesUseCase = new ListRolesUseCase();

    const response = await listRolesUseCase.execute();
    return res.json(response);
  }
}