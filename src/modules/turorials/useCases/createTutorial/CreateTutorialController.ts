import { Request, Response } from "express";
import { CreateTutorialUseCase } from "./CreateTutorialUseCase";

export class CreateTutorialController {
  async handle(req: Request, res: Response) {
    const { title, description, id_role, video_id } = req.body;
    const createTutorialUseCase = new CreateTutorialUseCase();

    const tutorial = await createTutorialUseCase.execute({
      title,
      description,
      id_role,
      video_id
    });

    return res.json(tutorial);
  }
}