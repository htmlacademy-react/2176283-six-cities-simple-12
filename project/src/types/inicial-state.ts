import { City } from './city';
import { Offer } from './offer';
import { Sort } from './sorting';

export type InitialState = {
  city: City;
  offers: Offer[];
  isOpenSort: boolean;
  sorting: Sort;
};
