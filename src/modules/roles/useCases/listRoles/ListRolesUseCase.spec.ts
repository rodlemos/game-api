import { prismaMock } from "../../../../../singleton";
import { ListRolesUseCase } from "./ListRolesUseCase";

let listRolesUseCase: ListRolesUseCase;

describe("List all roles", () => {
  beforeEach(() => {
    listRolesUseCase = new ListRolesUseCase();
  })

  it("should be able to list all registered roles", async () => {
    const role = {
      id: "1",
      name: "Mid",
      image_url: "https://github.com/esports-bits/lol_images/blob/master/role_lane_icons/MIDDLE.png?raw=true"
    }

    prismaMock.roles.findMany.mockResolvedValue([role]);

    await expect(listRolesUseCase.execute()).resolves.toHaveLength(1);
  });
})