import prisma from "../../../../database/prismaClient";

interface CreateChampion {
  name: string;
  image_url: string;
  abilities: string[];

}

export class CreateChampionUseCase {
  async execute({ name, image_url, abilities }: CreateChampion) {
    const championExists = await prisma.champions.findFirst({
      where: {
        name
      }
    });

    if (championExists) {
      throw new Error("Champion already registered.")
    }

    const champion = await prisma.champions.create({
      data: {
        name,
        image_url,
        abilities
      }
    });

    return champion;
  }
}