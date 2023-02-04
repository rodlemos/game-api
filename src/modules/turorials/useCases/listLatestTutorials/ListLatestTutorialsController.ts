import { Request, Response } from "express";
import { ListLatestTutorialsUseCase } from "./ListLatestTutorialsUseCase";

export class ListLatestTutorialsController {
  async handle(req: Request, res: Response) {
    const listLatestTutorialsUseCase = new ListLatestTutorialsUseCase();
    const result = await listLatestTutorialsUseCase.execute();

    return res.json(result);
  }
}