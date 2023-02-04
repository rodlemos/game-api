import prisma from "../../../../database/prismaClient";

export class ListGuidesUseCase {
  async execute() {
    const guides = await prisma.guides.findMany({
      include: {
        champion: true,
        role: true,
        items: {
          include: { item: true },
          orderBy: { slot: "asc" },
        },
      },
      orderBy: {
        created_at: "desc",
      },
    });

    return guides;
  }
}
