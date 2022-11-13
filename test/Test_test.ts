import * as fs from 'fs';
import { Artdatabanken } from '../src/Artdatabanken';
import credentials from '../credentials.json';
import { SearchCulture, SearchFields } from '../src/taxon/TaxonV1Api';

describe('Artdatabanken', () => {
  xit('will search for observations', async () => {
    const sut = new Artdatabanken({
      ...credentials,
    });

    const rsp = await sut.sos.v1.observations.postSearch(
      {
        taxon: {
          ids: [5000039],
          includeUnderlyingTaxa: true,
        },
        geographics: {
          boundingBox: {
            bottomRight: {
              latitude: 57.822384,
              longitude: 14.2739869,
            },
            topLeft: {
              latitude: 57.8256361,
              longitude: 14.2662387,
            },
          },
        },
        date: {
          startDate: '2017-01-01',
          endDate: '2017-12-31',
        },
      },
      { skip: 0, take: 100 }
    );

    fs.writeFileSync('./out.json', JSON.stringify(rsp, null, 2));
    expect(rsp.records.length).toEqual(100);
  });

  it('will search for taxon names', async () => {
    const sut = new Artdatabanken({
      ...credentials,
    });

    const rsp = await sut.taxon.v1.searchTaxonNames({
      searchString: 'Amanita phalloides',
      searchFields: SearchFields.Both,
      culture: SearchCulture.SvSe,
      page: 1,
      pageSize: 100,
    });

    expect(rsp).toEqual([]);
  });
});
