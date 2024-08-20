export interface data {
  name: Name;
  tld?: (string)[] | null;
  cca2: string;
  ccn3: string;
  cca3: string;
  independent: boolean;
  status: string;
  unMember: boolean;
  currencies: Currencies;
  idd: Idd;
  capital?: (string)[] | null;
  altSpellings?: (string)[] | null;
  region: string;
  languages: Languages;
  translations: Translations;
  latlng?: (number)[] | null;
  landlocked: boolean;
  area: number;
  demonyms: Demonyms;
  flag: string;
  maps: Maps;
  population: number;
  car: Car;
  timezones?: (string)[] | null;
  continents?: (string)[] | null;
  flags: Flags;
  coatOfArms: CoatOfArms;
  startOfWeek: string;
  capitalInfo: CapitalInfo;
}
export interface Name {
  common: string;
  official: string;
  nativeName: NativeName;
}
export interface NativeName {
  [key: string]: NameTypes;
}
export interface NameTypes {
  official: string;
  common: string;
}
export interface Currencies {
  [key: string]: {
    name: string;
    symbol: string;
  };
}
export interface Idd {
  root: string;
  suffixes?: (string)[] | null;
}
export interface Languages {
  [key: string]: string;
}
export interface Translations {
  [key: string]: NameTypes;
}
export interface Demonyms {
  [key: string]: DemonymSex;
}
export interface DemonymSex {
  f: string;
  m: string;
}
export interface Maps {
  googleMaps: string;
  openStreetMaps: string;
}
export interface Car {
  signs?: (string)[] | null;
  side: string;
}
export interface Flags {
  png?: string;
  svg?: string;
  alt?: string;
}
export interface CoatOfArms {
  png?: string;
  svg?: string;
}
export interface CapitalInfo {
  latlng?: (number)[] | null;
}
