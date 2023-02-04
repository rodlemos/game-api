import { Request, Response } from "express";
import { ListTutorialsUseCase } from "./ListTutorialsUseCase";

export class ListTutorialsController {
  async handle(Req: Request, res: Response) {
    const listTutorialsUseCase = new ListTutorialsUseCase();

    const response = await listTutorialsUseCase.execute();
    return res.json(response);
  }
}