export enum AppRoute {
  Root = '/',
  Login = '/login',
  Offer = '/offer',
  NoFound = '*',
}

export const cities = [
  {
    title: 'Paris',
    latitude: 48.864716,
    longitude: 2.349014,
    zoom: 11,
  }, {
    title: 'Cologne',
    latitude: 50.933594,
    longitude: 6.961899,
    zoom: 11,
  }, {
    title: 'Brussels',
    latitude: 50.850346,
    longitude: 4.351721,
    zoom: 11,
  }, {
    title: 'Amsterdam',
    latitude: 52.370216,
    longitude: 4.895168,
    zoom: 11,
  }, {
    title: 'Hamburg',
    latitude: 53.551086,
    longitude: 9.993682,
    zoom: 11,
  }, {
    title: 'Dusseldorf',
    latitude: 51.227741,
    longitude: 6.773456,
    zoom: 11,
  },
];

export const SORTING_LIST = [
  {label: 'Popular'},
  {label: 'Price: low to high'},
  {label: 'Price: high to low'},
  {label: 'Top rated first'}
];

export enum APIRoute {
  Offers = '/hotels',
  Comments = '/comments',
  Login = '/login',
  Logout = '/logout',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const IMAGE_QUANTITY = 6;

export const REVIEW_SYMBOL_QUANTITY = {
  min: 50,
  max: 300,
};

export const titles = [
  {
    title:'perfect',
    id: 5
  },
  {
    title:'good',
    id: 4
  },
  {
    title:'not bad',
    id: 3
  },
  {
    title:'badly',
    id: 2
  },
  {
    title:'terribly',
    id: 1
  }
];

