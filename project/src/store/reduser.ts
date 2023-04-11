import { createReducer } from '@reduxjs/toolkit';
import { CITIES } from '../const';
import { changeCity, addOffers, openSorting } from './action';
import { InitialState } from '../types/inicial-state';
import { offers } from '../mocks/offers';

const initialState: InitialState = {
  city: CITIES[0],
  offers,
  isOpenSort: false,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(openSorting, (state) => {
      state.isOpenSort = !state.isOpenSort;
    });
});

export {reducer};
