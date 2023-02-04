import { prismaMock } from "../../../../../singleton";
import { CreateRoleUseCase } from './CreateRoleUseCase';

let createRoleUseCase: CreateRoleUseCase;

describe("Create Role", () => {
  beforeEach(() => {
    createRoleUseCase = new CreateRoleUseCase();
  })

  it("should be able to create a new category", async () => {
    const role = {
      id: "1",
      name: "Mid",
      image_url: "https://github.com/esports-bits/lol_images/blob/master/role_lane_icons/MIDDLE.png?raw=true"
    }

    prismaMock.roles.create.mockResolvedValue(role);

    await expect(createRoleUseCase.execute(role)).resolves.toEqual({
      id: '1',
      name: "Mid",
      image_url: "https://github.com/esports-bits/lol_images/blob/master/role_lane_icons/MIDDLE.png?raw=true"
    });
  });
});