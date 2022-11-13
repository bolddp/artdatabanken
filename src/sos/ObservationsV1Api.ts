import { Request } from '../Artdatabanken';
import { PagedResult, Pagination } from '../models/PagedResult';
import { SosObservation } from '../models/SosObservation';
import { SearchFilter } from '../models/SearchFilter';

export class ObservationsV1Api {
  private request: Request;

  constructor(request: Request) {
    this.request = request;
  }

  async postSearch(
    searchFilter: SearchFilter,
    pagination: Pagination
  ): Promise<PagedResult<SosObservation>> {
    const rsp = await this.request<PagedResult<SosObservation>>({
      url: '/Search',
      method: 'POST',
      params: {
        ...pagination,
      },
      data: searchFilter,
    });
    return rsp.data;
  }
}
