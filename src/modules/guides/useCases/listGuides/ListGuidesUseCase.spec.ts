import slugify from "slugify";
import { prismaMock } from "../../../../../singleton";
import { ListGuidesUseCase } from "./ListGuidesUseCase"

let listGuidesUseCase: ListGuidesUseCase;

describe("List all guides", () => {
  beforeEach(() => {
    listGuidesUseCase = new ListGuidesUseCase();
  });

  it("should be able to list all guides", async () => {
    const guide = {
      id: '1',
      title: 'Nidalee spear hurts',
      slug: slugify('Nidalee spear hurts'),
      id_champion: '512d5a4e-d1bd-4b60-9220-3e64784751cd',
      id_role: '512d5a4e-d1bd-4b60-9220-3e64784751cd',
      created_at: new Date("2022-09-23T20:08:03.348Z"),
      updated_at: new Date("2022-09-23T20:08:03.348Z")
    }

    prismaMock.guides.findMany.mockResolvedValue([guide]);

    await expect(listGuidesUseCase.execute()).resolves.toEqual([{
      id: '1',
      title: 'Nidalee spear hurts',
      slug: slugify('Nidalee spear hurts'),
      id_champion: '512d5a4e-d1bd-4b60-9220-3e64784751cd',
      id_role: '512d5a4e-d1bd-4b60-9220-3e64784751cd',
      created_at: new Date("2022-09-23T20:08:03.348Z"),
      updated_at: new Date("2022-09-23T20:08:03.348Z")
    }]);
  })
})