export interface SosObservation {
  dataSetId: string;
  dataSetName: string;
  occurrence: ObservationOccurrence;
  taxon: ObservationTaxon;
  location: ObservationLocation;
}

export interface ObservationOccurrence {
  occurenceId: string;
}

export interface ObservationTaxon {
  vernacularName: string;
  scientificName: string;
  attributes: ObservationTaxonAttributes;
}

export interface ObservationTaxonAttributes {
  dyntaxaTaxonId: number;
  parentDyntaxaTaxonId?: number;
  secondaryParentDyntaxaTaxonIds: number[];
  actionPlan: string;
  birdDirective?: boolean;
  disturbanceRadius: number;
  isEURegulation_1143_2014: boolean;
  natura2000HabitatsDirectiveArticle2?: boolean;
  natura2000HabitatsDirectiveArticle4?: boolean;
  natura2000HabitatsDirectiveArticle5?: boolean;
  organismGroup: string;
  protectedByLawSpeciesProtection?: boolean;
  protectedByLawBirds?: boolean;
  protectedByLaw?: boolean;
  protectionLevel: string;
  redlistCategory: string;
  swedishHistory: string;
  swedishHistoryId: string;
  swedishHistoryCategory: string;
  swedishOccurrence: string;
  taxonCategoryId?: number;
  taxonCategorySwedishName: string;
  taxonCategoryEnglishName: string;
  taxonCategoryDarwinCoreName: string;
}

export interface ObservationLocation {
  id: number;
  municipality: ObservationPlace;
  decimalLatitude: number;
  decimalLongitude: number;
  sweref99TmY: number;
  sweref99TmX: number;
  coordinateUncertaintyInMeters: number;
}

export interface ObservationPlace {
  name: string;
  featureId: string;
}
