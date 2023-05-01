import { City } from './city';
import { Offer } from './offer';
import { Sort } from './sorting';
import { AuthorizationStatus } from '../const';
import { Comments } from './comments';
import { UserData } from './user-data';

export type InitialState = {
  city: City;
  offers: Offer[];
  offerSelected: Offer | null;
  offersNearby: Offer[];
  comments: Comments;
  isOpenSort: boolean;
  sorting: Sort;
  isOffersDataLoading: boolean;
  isCommentDataLoading: boolean;
  authorizationStatus: AuthorizationStatus;
  user: UserData | null;
};
