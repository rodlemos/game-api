import { Request, Response } from "express";
import { CreateItemUseCase } from "./CreateItemUseCase";

export class CreateItemController {
  async handle(req: Request, res: Response) {
    const { name, image_url } = req.body;
    const createItemUseCase = new CreateItemUseCase();
    const result = await createItemUseCase.execute({
      name,
      image_url
    });

    return res.json(result);
  }
}