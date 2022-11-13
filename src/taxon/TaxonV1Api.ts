import { Request } from '../Artdatabanken';

export class TaxonV1Api {
  private request: Request;

  constructor(request: Request) {
    this.request = request;
  }

  /**
   * As of 2022-11-13, this endpoint return HTTP 500 and has for quite some time...
   */
  async searchTaxonNames(request: SearchRequest): Promise<any[]> {
    const rsp = await this.request<any[]>({
      url: '/taxa/names',
      params: {
        ...request,
      },
    });
    return rsp.data;
  }
}

export interface SearchRequest {
  searchString: string;
  searchFields?: SearchFields;
  isRecommended?: boolean;
  isOkForObservationSystems?: boolean;
  culture?: SearchCulture;
  page?: number;
  pageSize?: number;
}

export enum SearchFields {
  Scientific = 'Scientific',
  Swedish = 'Swedish',
  Both = 'Both',
}

export enum SearchCulture {
  SvSe = 'sv_SE',
  EnGb = 'en_GB',
}
