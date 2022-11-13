export interface SearchFilter {
  date?: DateFilter;
  geographics: GeographicsFilter;
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
