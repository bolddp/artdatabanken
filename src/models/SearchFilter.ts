export interface SearchFilter {
  date?: DateFilter;
  geographics?: GeographicsFilter;
  taxon?: TaxonFilter;
}

export interface GeographicsFilter {
  areas?: AreaFilter[];
  boundingBox?: LatLonBoundingBox;
}

export interface AreaFilter {
  areaType: AreaType;
  featureId: string;
}

export enum AreaType {
  Municipality = 1,
  CountryRegion = 13,
  Province = 16,
  BirdValidationArea = 18,
  Parish = 19,
  Spa = 20,
  County = 21,
  ProtectedNature = 22,
  SwedishForestAgencyDistricts = 24,
  Sci = 26,
  WaterArea = 27,
}

export interface LatLonBoundingBox {
  bottomRight: LatLonCoordinate;
  topLeft: LatLonCoordinate;
}

export interface LatLonCoordinate {
  latitude: number;
  longitude: number;
}

export interface DateFilter {
  startDate: string;
  endDate: string;
}

export interface TaxonFilter {
  scientificNames?: string[];
  includeUnderlyingTaxa?: boolean;
  ids?: number[];
  taxonListOperator?: TaxonListOperator;
}

export enum TaxonListOperator {
  Merge = 'Merge',
  Filter = 'Filter',
}
