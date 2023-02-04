import { Request, Response } from "express";
import { CreateChampionUseCase } from "./CreateChampionUseCase";

export class CreateChampionController {
  async handle(req: Request, res: Response) {
    const { name, image_url, abilities } = req.body;
    const createChampionUseCase = new CreateChampionUseCase();
    const result = await createChampionUseCase.execute({
      name,
      image_url,
      abilities
    });

    return res.json(result);
  }
}