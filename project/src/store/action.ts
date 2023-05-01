import { createAction } from '@reduxjs/toolkit';
import { City } from '../types/city';
import { Offer, Offers } from '../types/offer';
import { Sort } from '../types/sorting';
import { AppRoute, AuthorizationStatus } from '../const';
import { Comments } from '../types/comments';
import { UserData } from '../types/user-data';

export const changeCity = createAction('offers/clickCity', (city: City) =>({
  payload: city,
}));

export const addOffers = createAction('offers/addOffers', (offers: Offer[]) => ({
  payload: offers,
}));

export const addOfferSelected = createAction('offers/addofferSelected', (offer: Offer) => ({
  payload: offer,
}));

export const addComments = createAction('comments/addComments', (comments: Comments) => ({
  payload: comments,
}));

export const addComment = createAction<Comments>('data/addComment');

export const addOffersNearby = createAction('offers/addoffersNearby', (offers: Offer[]) => ({
  payload: offers,
}));

export const toggleSortingOpen = createAction('offers/openSorting');

export const changeSorting = createAction('offers/changeSorting', (sorting: Sort) => ({
  payload:sorting
}));

export const loadOffers = createAction<Offers>('data/loadOffers');

export const requireAuthorization = createAction<AuthorizationStatus>
('user/requireAuthorization');

export const setOffersDataLoadingStatus = createAction<boolean>
('data/setOffersDataLoadingStatus');

export const setCommentDataLoadingStatus = createAction<boolean>
('data/setCommentDataLoadingStatus');

export const setUser = createAction<UserData | null>('page/setEmail');

export const redirectToRoute = createAction<AppRoute>('app/redirectToRoute');
