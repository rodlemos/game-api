import slugify from "slugify";
import prisma from "../../../../database/prismaClient";

interface ICreateGuide {
  title: string;
  id_champion: string;
  id_role: string;
  items: {
    id: string;
    slot: number;
  }[];
}

export class CreateGuideUseCase {
  async execute({ title, id_champion, id_role, items }: ICreateGuide) {
    const slug = slugify(title, { remove: /[*+~.()'"!:@]/g });
    const slugExists = await prisma.guides.findUnique({
      where: {
        slug
      }
    });

    if (slugExists) {
      throw new Error("Guide with same title already registered.");
    }

    const itemsAssign = items.map(item => (
      {
        slot: item.slot,
        item: {
          connect: {
            id: item.id
          }
        }
      }
    ))

    const guide = await prisma.guides.create({
      data: {
        title,
        slug,
        id_champion,
        id_role,
        items: {
          create: itemsAssign
        }
      }
    });

    return guide;
  }
}