import prisma from "../../../../database/prismaClient";

export class ListTutorialsUseCase {
  async execute() {
    const tutorials = await prisma.tutorials.findMany({
      include: {
        role: {
          select: {
            image_url: true,
          },
        },
      },
    });
    return tutorials;
  }
}
