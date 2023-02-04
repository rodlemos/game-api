import slugify from 'slugify';
import { prismaMock } from '../../../../../singleton';
import { CreateGuideUseCase } from './CreateGuideUseCase';

let createGuideUseCase: CreateGuideUseCase;

describe("Create a guide", () => {
  beforeEach(() => {
    createGuideUseCase = new CreateGuideUseCase();
  });

  it("should be able to create a new guide", async () => {
    const guide = {
      id: '1',
      title: 'Nidalee spear hurts',
      slug: slugify('Nidalee spear hurts'),
      id_champion: '512d5a4e-d1bd-4b60-9220-3e64784751cd',
      id_role: '512d5a4e-d1bd-4b60-9220-3e64784751cd',
      items: [
        "02c404f3-dad0-49c7-9431-19f07b008d0a",
        "f057a043-e2c5-4db4-877e-8cca1de0f2b7",
        "e318c7ad-fd0f-4ce5-9b3c-09ca8f148620",
        "f38feb07-c647-41f5-985a-4c18e118d60c",
        "8d701ec1-98b6-4d14-b18f-b4e456f0e0f6",
        "23f4ad4f-7d5f-4e59-94e0-d39270321083"
      ],
      created_at: new Date("2022-09-23T20:08:03.348Z"),
      updated_at: new Date("2022-09-23T20:08:03.348Z")
    }

    prismaMock.guides.create.mockResolvedValue(guide);

    await expect(createGuideUseCase.execute(guide)).resolves.toHaveProperty("slug");
  })
})