import { Request, Response } from "express";
import { FindGuideBySlugUseCase } from "./FindGuideBySlugUseCase";

export class FindGuideBySlugController {
  async handle(req: Request, res: Response) {
    const { slug } = req.params;
    const findGuideBySlugUseCase = new FindGuideBySlugUseCase();
    const result = await findGuideBySlugUseCase.execute({ slug });

    return res.json(result);
  }
}
