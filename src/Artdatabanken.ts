import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { SosV1Api } from './sos/SosV1Api';
import { TaxonV1Api } from './taxon/TaxonV1Api';

const ArtdatabankenApiUrl = 'https://api.artdatabanken.se';
const debug = require('debug')('artdatabanken');

export type Request = <T>(
  config: AxiosRequestConfig
) => Promise<AxiosResponse<T, any>>;

export interface ArtdatabankenConfig {
  subscriptionKey: string;
}

export class Artdatabanken {
  constructor(artdatabankenConfig: ArtdatabankenConfig) {
    const request: Request = async <T>(config: AxiosRequestConfig) => {
      debug('request', config);
      return axios.request<T>({
        baseURL: ArtdatabankenApiUrl,
        headers: {
          'Ocp-Apim-Subscription-Key': `TOKEN ${artdatabankenConfig.subscriptionKey}`,
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        ...config,
      });
    };
    this.taxon = { v1: new TaxonV1Api(request) };
    this.sos = {
      v1: new SosV1Api(
        extendRequest(request, '/species-observation-system/v1')
      ),
    };
  }

  taxon: {
    v1: TaxonV1Api;
  };
  sos: {
    v1: SosV1Api;
  };
}

export const extendRequest = (request: Request, apiPath: string): Request => {
  return async <T>(config: AxiosRequestConfig) => {
    const extendedConfig: AxiosRequestConfig = {
      ...config,
      url: apiPath + config.url,
    };
    return request(extendedConfig);
  };
};
