import { createReducer } from '@reduxjs/toolkit';
import { cities, SORTING_LIST, AuthorizationStatus } from '../const';

import {
  changeCity,
  addOffers,
  addOfferSelected,
  toggleSortingOpen,
  changeSorting,
  loadOffers,
  addOffersNearby,
  setOffersDataLoadingStatus,
  requireAuthorization,
  setUser,
  addComments,
  setCommentDataLoadingStatus
} from './action';

import { InitialState } from '../types/inicial-state';

const initialState: InitialState = {
  city: cities[0],
  offers:[],
  offerSelected: null,
  offersNearby: [],
  comments: [],
  isOpenSort: false,
  sorting: SORTING_LIST[0],
  isOffersDataLoading: false,
  isCommentDataLoading: false,
  authorizationStatus: AuthorizationStatus.Unknown,
  user: null,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(addOfferSelected, (state, action) => {
      state.offerSelected = action.payload;
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
    .addCase(addOffersNearby, (state, action) => {
      state.offersNearby = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setOffersDataLoadingStatus, (state, action) => {
      state.isOffersDataLoading = action.payload;
    })
    .addCase(setCommentDataLoadingStatus, (state, action) => {
      state.isCommentDataLoading = action.payload;
    })
    .addCase(setUser, (state, action) => {
      state.user = action.payload;
    });
});

export {reducer};
