import prisma from "../../../../database/prismaClient";

interface IFindBySlug {
  slug: string;
}

export class FindGuideBySlugUseCase {
  async execute({ slug }: IFindBySlug) {
    const guide = await prisma.guides.findUniqueOrThrow({
      where: {
        slug,
      },
      include: {
        champion: true,
        role: {
          select: {
            name: true,
            image_url: true,
          },
        },
        items: {
          include: {
            item: true,
          },
          orderBy: { slot: "asc" },
        },
      },
    });

    return guide;
  }
}
