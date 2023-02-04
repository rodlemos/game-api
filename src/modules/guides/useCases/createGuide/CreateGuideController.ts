import { Request, Response } from "express";
import { CreateGuideUseCase } from "./CreateGuideUseCase";

export class CreateGuideController {
  async handle(req: Request, res: Response) {
    const { title, id_champion, id_role, items } = req.body;
    const createGuideUseCase = new CreateGuideUseCase();
    const result = await createGuideUseCase.execute({
      title,
      id_champion,
      id_role,
      items
    });

    return res.json(result);
  }
}