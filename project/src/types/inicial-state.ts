import { City } from './city';
import { Offer } from './offer';
import { Sort } from './sorting';
import { AuthorizationStatus } from '../const';
import { Comments } from './comments';

export type InitialState = {
  city: City;
  offers: Offer[];
  comments: Comments;
  isOpenSort: boolean;
  sorting: Sort;
  isOffersDataLoading: boolean;
  authorizationStatus: AuthorizationStatus;
  error: string | null;
  email: string | null;
};
