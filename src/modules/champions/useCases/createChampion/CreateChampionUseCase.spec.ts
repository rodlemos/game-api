import { prismaMock } from "../../../../../singleton";
import { CreateChampionUseCase } from "./CreateChampionUseCase";

let createChampionUseCase: CreateChampionUseCase;

describe("Create a new Champion", () => {
  beforeEach(() => {
    createChampionUseCase = new CreateChampionUseCase();
  });

  it("should be able to create a new champion", async () => {
    const zeri = {
      id: "1",
      name: "Zeri",
      image_url: "http://ddragon.leagueoflegends.com/cdn/12.18.1/img/champion/Zeri.png",
      abilities: [
        "http://ddragon.leagueoflegends.com/cdn/12.18.1/img/spell/ZeriQ.png",
        "http://ddragon.leagueoflegends.com/cdn/12.18.1/img/spell/ZeriW.png",
        "http://ddragon.leagueoflegends.com/cdn/12.18.1/img/spell/ZeriE.png",
        "http://ddragon.leagueoflegends.com/cdn/12.18.1/img/spell/ZeriR.png"
      ]
    };

    prismaMock.champions.create.mockResolvedValue(zeri);

    await expect(createChampionUseCase.execute(zeri)).resolves.toHaveProperty('name', 'Zeri')
  })
})

