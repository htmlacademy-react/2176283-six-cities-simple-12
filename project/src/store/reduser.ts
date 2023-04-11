import { createReducer } from '@reduxjs/toolkit';
import { CITIES } from '../const';
import { changeCity, addOffers } from './action';
import { InitialState } from '../types/inicial-state';
import { offers } from '../mocks/offers';

const initialState: InitialState = {
  city: CITIES[0],
  offers,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    });
});

export {reducer};
