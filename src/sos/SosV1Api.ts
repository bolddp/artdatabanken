import { extendRequest, Request } from '../Artdatabanken';
import { ObservationsV1Api } from './ObservationsV1Api';

export class SosV1Api {
  constructor(request: Request) {
    this.observations = new ObservationsV1Api(
      extendRequest(request, '/Observations')
    );
  }

  observations: ObservationsV1Api;
}
