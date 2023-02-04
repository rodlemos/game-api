import { Request, Response } from "express";
import { ListLatestGuidesUseCase } from "./ListLatestGuidesUseCase";

export class ListLatestGuidesController {
  async handle(req: Request, res: Response) {
    const listLatestGuidesUseCase = new ListLatestGuidesUseCase();
    const result = await listLatestGuidesUseCase.execute();

    return res.json(result);
  }
}