import prisma from "../../../../database/prismaClient";

interface ICreateRole {
  name: string;
  image_url: string;
}

export class CreateRoleUseCase {
  async execute({ name, image_url }: ICreateRole) {
    const roleExists = await prisma.roles.findFirst({
      where: {
        name: {
          equals: name,
          mode: "insensitive"
        }
      }
    });

    if (roleExists) {
      throw new Error("Role already registered")
    }

    const role = await prisma.roles.create({
      data: {
        name,
        image_url: image_url
      }
    });

    return role;
  }
}