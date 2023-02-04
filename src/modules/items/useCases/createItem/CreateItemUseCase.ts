import prisma from "../../../../database/prismaClient";

interface ICreateItem {
  name: string;
  image_url: string;
}

export class CreateItemUseCase {
  async execute({ name, image_url }: ICreateItem) {
    const nameExists = await prisma.items.findUnique({
      where: {
        name
      }
    });

    if (nameExists) {
      throw new Error("Item already registered.")
    }

    const item = await prisma.items.create({
      data: {
        name,
        image_url
      }
    });

    return item;
  }
}