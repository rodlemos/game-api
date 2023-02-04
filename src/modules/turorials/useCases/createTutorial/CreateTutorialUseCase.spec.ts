import slugify from 'slugify';
import { prismaMock } from '../../../../../singleton';
import { CreateTutorialUseCase } from './CreateTutorialUseCase';

let createTutorialUseCase: CreateTutorialUseCase;

describe("Create a tutorial", () => {
  beforeEach(() => {
    createTutorialUseCase = new CreateTutorialUseCase();
  });

  it("should be able to create a new tutorial", async () => {
    const tutorial = {
      id: '1',
      title: 'Awsome guide',
      slug: slugify('Awsome guide'),
      description: 'Op route for Jungle',
      video_id: 'fd234',
      id_role: '512d5a4e-d1bd-4b60-9220-3e64784751cd',
      created_at: new Date("2022-09-23T20:08:03.348Z")
    }

    prismaMock.tutorials.create.mockResolvedValue(tutorial);

    await expect(createTutorialUseCase.execute(tutorial)).resolves.toEqual({
      id: '1',
      title: 'Awsome guide',
      slug: slugify('Awsome guide'),
      description: 'Op route for Jungle',
      video_id: 'fd234',
      id_role: '512d5a4e-d1bd-4b60-9220-3e64784751cd',
      created_at: new Date("2022-09-23T20:08:03.348Z")
    })
  })
})