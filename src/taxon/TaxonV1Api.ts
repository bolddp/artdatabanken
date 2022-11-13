import { Request } from '../Artdatabanken';

export class TaxonV1Api {
  private request: Request;

  constructor(request: Request) {
    this.request = request;
  }
}
