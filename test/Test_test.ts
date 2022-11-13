import { Artdatabanken } from '../src/Artdatabanken';
import { AreaType } from '../src/models/SearchFilter';
describe('Artdatabanken', () => {
  it('will call', async () => {
    const sut = new Artdatabanken({
      subscriptionKey: 'subscriptionKey',
    });

    const rsp = await sut.sos.v1.observations.postObservationSearch(
      {
        geographics: {
          areas: [
            {
              areaType: AreaType.Municipality,
              featureId: '687',
            },
          ],
        },
      },
      { skip: 0, take: 100 }
    );

    expect(rsp.records.length).toEqual(100);
  });
});
