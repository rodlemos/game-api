import { Request, Response } from "express";
import { ListGuidesUseCase } from "./ListGuidesUseCase";

export class ListGuidesController {
  async handle(req: Request, res: Response) {
    const listGuidesUseCase = new ListGuidesUseCase();
    const result = await listGuidesUseCase.execute();

    return res.json(result);
  }
}