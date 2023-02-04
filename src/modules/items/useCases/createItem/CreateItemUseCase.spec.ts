import { prismaMock } from "../../../../../singleton";
import { CreateItemUseCase } from "./CreateItemUseCase";

let createItemUseCase: CreateItemUseCase;

describe("create a new Item", () => {
  beforeEach(() => {
    createItemUseCase = new CreateItemUseCase();
  })

  it("should be able to create a new item", async () => {
    const item = {
      id: "1",
      name: "Boots",
      image_url: "http://ddragon.leagueoflegends.com/cdn/12.18.1/img/item/1001.png",
      id_champion: null
    }

    prismaMock.items.create.mockResolvedValue(item);

    await expect(createItemUseCase.execute(item)).resolves.toHaveProperty('id');
  });
});