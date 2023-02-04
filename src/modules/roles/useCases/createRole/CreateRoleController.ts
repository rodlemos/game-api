import { Request, Response } from "express";
import { CreateRoleUseCase } from "./CreateRoleUseCase";

export class CreateRoleController {
  async handle(req: Request, res: Response) {
    const { name, image_url } = req.body;
    const createRoleUseCase = new CreateRoleUseCase();
    const result = await createRoleUseCase.execute({
      name,
      image_url
    });

    return res.json(result);
  }
}