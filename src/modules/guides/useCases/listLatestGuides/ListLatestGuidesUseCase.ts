import prisma from "../../../../database/prismaClient";

export class ListLatestGuidesUseCase {
  async execute() {
    const latest = await prisma.guides.findMany({
      take: 6,
      orderBy: { created_at: 'desc' },
      select: {
        id: true,
        title: true,
        slug: true,
        champion: {
          select: {
            image_url: true
          }
        },
        items: {
          include: {
            item: {
              select: {
                image_url: true,
              },
            },
          },
          orderBy: { slot: 'asc'}
        },
        updated_at: true
      },
    });

    return latest;
  }
}