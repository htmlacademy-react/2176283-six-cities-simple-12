import { createReducer } from '@reduxjs/toolkit';
import { CITIES, SORTING_LIST, AuthorizationStatus } from '../const';

import {
  changeCity,
  addOffers,
  toggleSortingOpen,
  changeSorting,
  loadOffers,
  setOffersDataLoadingStatus,
  requireAuthorization,
  setError,
  setEmail,
  addComments
} from './action';

import { InitialState } from '../types/inicial-state';
//import { offers } from '../mocks/offers';

const initialState: InitialState = {
  city: CITIES[0],
  offers:[],
  comments: [],
  isOpenSort: false,
  sorting: SORTING_LIST[0],
  isOffersDataLoading: false,
  authorizationStatus: AuthorizationStatus.Unknown,
  error: null,
  email: null,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(addComments, (state, action) => {
      state.comments = action.payload;
    })
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(toggleSortingOpen, (state) => {
      state.isOpenSort = !state.isOpenSort;
    })
    .addCase(changeSorting, (state, action) => {
      state.sorting = action.payload;
      state.isOpenSort = !state.isOpenSort;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setOffersDataLoadingStatus, (state, action) => {
      state.isOffersDataLoading = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    })
    .addCase(setEmail, (state, action) => {
      state.email = action.payload;
    });
});

export {reducer};
