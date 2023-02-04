import slugify from 'slugify';
import prisma from '../../../../database/prismaClient';

interface ICreateTutorial {
  title: string;
  description: string;
  video_id: string;
  id_role: string;
}

export class CreateTutorialUseCase {
  async execute({ title, description, id_role, video_id }: ICreateTutorial) {
    const slug = slugify(title, { remove: /[*+~.()'"!:@]/g });

    const slugExists = await prisma.tutorials.findUnique({
      where: {
        slug
      }
    });

    if (slugExists) {
      throw new Error("Tutorial with this name already exists");
    }

    const tutorial = await prisma.tutorials.create({
      data: {
        title,
        slug,
        description,
        id_role,
        video_id
      }
    });

    return tutorial;
  }
}