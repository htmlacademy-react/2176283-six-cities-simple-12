import { createAction } from '@reduxjs/toolkit';
import { City } from '../types/city';
import { Offer } from '../types/offer';

export const clickCity = createAction('offers/clickCity', (city: City) =>({
  payload: city,
}));

export const addOffers = createAction('offers/addOffers', (offers: Offer[]) => ({
  payload: offers,
}));
