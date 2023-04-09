import { createReducer } from '@reduxjs/toolkit';
import { CITIES } from '../const';
import { clickCity, addOffers } from './action';
import { InitialState } from '../types/inicial-state';

const initialState: InitialState = {
  city: CITIES[0],
  offers: [],
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(clickCity, (state, action) => {
      state.city = action.payload;
    });
});

export {reducer};
