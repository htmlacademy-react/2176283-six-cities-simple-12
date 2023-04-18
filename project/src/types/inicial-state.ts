import { City } from './city';
import { Offer } from './offer';
import { Sort } from './sorting';
import { AuthorizationStatus } from '../const';

export type InitialState = {
  city: City;
  offers: Offer[];
  isOpenSort: boolean;
  sorting: Sort;
  isOffersDataLoading: boolean;
  authorizationStatus: AuthorizationStatus;
  error: string | null;
};
