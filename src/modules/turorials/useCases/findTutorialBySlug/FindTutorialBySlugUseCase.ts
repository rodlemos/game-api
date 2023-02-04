import prisma from "../../../../database/prismaClient";

interface IFindBySlug {
  slug: string;
}

export class FindTutorialBySlugUseCase {
  async execute({ slug }: IFindBySlug) {
    const tutorial = await prisma.tutorials.findUniqueOrThrow({
      where: {
        slug,
      },
    });

    return tutorial;
  }
}
