import { createAction } from '@reduxjs/toolkit';
import { City } from '../types/city';
import { Offer } from '../types/offer';
import { Sort } from '../types/sorting';

export const changeCity = createAction('offers/clickCity', (city: City) =>({
  payload: city,
}));

export const addOffers = createAction('offers/addOffers', (offers: Offer[]) => ({
  payload: offers,
}));

export const openSorting = createAction('offers/openSorting');

export const changeSorting = createAction('offers/changeSorting', (sorting: Sort) => ({
  payload:sorting
}));
