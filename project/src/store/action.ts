import { createAction } from '@reduxjs/toolkit';
import { City } from '../types/city';
import { Offer, Offers } from '../types/offer';
import { Sort } from '../types/sorting';
import { AuthorizationStatus } from '../const';

export const changeCity = createAction('offers/clickCity', (city: City) =>({
  payload: city,
}));

export const addOffers = createAction('offers/addOffers', (offers: Offer[]) => ({
  payload: offers,
}));

export const toggleSortingOpen = createAction('offers/openSorting');

export const changeSorting = createAction('offers/changeSorting', (sorting: Sort) => ({
  payload:sorting
}));

export const loadOffers = createAction<Offers>('data/loadOffers');

export const requireAuthorization = createAction<AuthorizationStatus>
('user/requireAuthorization');

export const setError = createAction<string | null>('offers/setError');

export const setOffersDataLoadingStatus = createAction<boolean>
('data/setOffersDataLoadingStatus');

export const setEmail = createAction<string | null>('page/setEmail');
