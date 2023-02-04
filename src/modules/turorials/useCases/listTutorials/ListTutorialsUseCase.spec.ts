import { prismaMock } from "../../../../../singleton";
import { ListTutorialsUseCase } from "./ListTutorialsUseCase"

let listTutorialsUseCase: ListTutorialsUseCase;

describe("List all tutorials", () => {
  beforeEach(() => {
    listTutorialsUseCase = new ListTutorialsUseCase();
  });

  it("should be able to list all tutorials", async () => {
    const tutorial = {
      id: '1',
      title: 'This 1 JUNGLE ROUTE Stomps LOW ELO in Season 12',
      slug: 'This-1-JUNGLE-ROUTE-Stomps-LOW-ELO-in-Season-12',
      description: 'Use this jungle route and smash yout opponents',
      video_id: 'V_KiyjMjmhI',
      id_role: '512d5a4e-d1bd-4b60-9220-3e64784751cd',
      created_at: new Date('2022-09-23T20:29:29.894Z')
    }

    prismaMock.tutorials.findMany.mockResolvedValue([tutorial]);

    await expect(listTutorialsUseCase.execute()).resolves.toEqual([{
      id: '1',
      title: 'This 1 JUNGLE ROUTE Stomps LOW ELO in Season 12',
      slug: 'This-1-JUNGLE-ROUTE-Stomps-LOW-ELO-in-Season-12',
      description: 'Use this jungle route and smash yout opponents',
      video_id: 'V_KiyjMjmhI',
      id_role: '512d5a4e-d1bd-4b60-9220-3e64784751cd',
      created_at: new Date('2022-09-23T20:29:29.894Z')
    }]);
  })
})