import prisma from "../../../../database/prismaClient";

export class ListRolesUseCase {
  async execute() {
    const roles = await prisma.roles.findMany();
    return roles;
  }
}