import { Request, Response } from "express";
import { FindTutorialBySlugUseCase } from "./FindTutorialBySlugUseCase";

export class FindTutorialBySlugController {
  async handle(req: Request, res: Response) {
    const { slug } = req.params;
    const findTutorialBySlugUseCase = new FindTutorialBySlugUseCase();
    const result = await findTutorialBySlugUseCase.execute({ slug });

    return res.json(result);
  }
}
