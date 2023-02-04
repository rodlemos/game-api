import prisma from "../../../../database/prismaClient";

export class ListLatestTutorialsUseCase {
  async execute() {
    const latest = await prisma.tutorials.findMany({
      take: 3,
      orderBy: { created_at: 'desc' },
      select: {
        id: true,
        slug: true,
        video_id: true
      }
    });

    return latest
  }
}