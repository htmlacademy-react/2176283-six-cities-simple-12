export enum AppRoute {
  Root = '/',
  Login = '/login',
  Offer = '/offer/:id',
  NoFound = '*',
}

export const CITIES = [
  {
    title: 'Paris',
    latitude: 48.864716,
    longitude: 2.349014,
    zoom: 10,
  }, {
    title: 'Cologne',
    latitude: 50.933594,
    longitude: 6.961899,
    zoom: 10,
  }, {
    title: 'Brussels',
    latitude: 50.850346,
    longitude: 4.351721,
    zoom: 10,
  }, {
    title: 'Amsterdam',
    latitude: 52.370216,
    longitude: 4.895168,
    zoom: 10,
  }, {
    title: 'Hamburg',
    latitude: 53.551086,
    longitude: 9.993682,
    zoom: 10,
  }, {
    title: 'Dusseldorf',
    latitude: 51.227741,
    longitude: 6.773456,
    zoom: 10,
  },
];

export const SORTING_LIST = [
  {label: 'Popular'},
  {label: 'Price: low to high'},
  {label: 'Price: high to low'},
  {label: 'Top rated first'}
];
