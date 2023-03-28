import { Offers } from '../types/offer';
import { reviews } from './reviews';

const AVATAR_URL = 'https://i.pravatar.cc/128';

export const offers: Offers = [
  {
    city: {
      location: {
        latitude: 52.3909553943508,
        longitude: 4.85309666406198,
        zoom: 10
      },
      name: 'Amsterdam'
    },
    id: 3242,
    images: [
      'img/apartment-02.jpg',
      'img/apartment-03.jpg',
      'img/apartment-01.jpg',
      'img/apartment-02.jpg',
      'img/room.jpg',
      'img/apartment-small-04.jpg',
      'img/apartment-02.jpg',
    ],
    previewImage: 'img/apartment-02.jpg',
    title: 'Title..........title...........title',
    description: 'Описываются самые лучшие стороны этого жилья . . . . . . . много текста . . . . . . . . . . . . . . . . много текста . . . . . . ',
    premium: true,
    type: 'Private Room',
    rating: 5.0,
    bedrooms: 5,
    maxAdults: 5,
    price: 1200,
    goods:['Wi-Fi', 'TV', 'Parking', 'Kitchen', 'Coffee machine', 'Heating'],
    host:{
      id: 123,
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      name: 'Avrora',
      isPro: true
    },
    reviews: reviews,
  }, {
    city: {
      location: {
        latitude: 52.3609553943508,
        longitude: 4.85309666406198,
        zoom: 10
      },
      name: 'Amsterdam'
    },
    id: 5367,
    images: [
      'img/apartment-01.jpg',
      'img/apartment-small-03.jpg',
    ],
    previewImage: 'img/apartment-01.jpg',
    title: 'kdkjhgfdghjhgfghjkjjvnd',
    description: 'lkvdsomdspmdspc',
    premium: false,
    type: 'Apartment',
    rating: 1.5,
    bedrooms: 3,
    maxAdults: 5,
    price: 1200,
    goods:['123', '345', '567'],
    host:{
      id: 345,
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      name: 'Richi',
      isPro: true
    },
    reviews: reviews,
  }, {
    city: {
      location: {
        latitude: 52.3909553943508,
        longitude: 4.929309666406198,
        zoom: 10
      },
      name: 'Amsterdam'
    },
    id: 332342,
    images: [
      'img/apartment-02.jpg',
      'img/apartment-03.jpg',
      'img/apartment-01.jpg',
      'img/apartment-02.jpg',
      'img/room.jpg',
      'img/apartment-small-04.jpg',
      'img/apartment-02.jpg',
    ],
    previewImage: 'img/apartment-02.jpg',
    title: '. . Title.........title...........title . .',
    description: 'Описываются самые лучшие стороны этого жилья . . . . . . . много текста . . . . . . . . . . . . . . . . много текста . . . . . . ',
    premium: false,
    type: 'Private Room',
    rating: 2.9,
    bedrooms: 5,
    maxAdults: 5,
    price: 1200,
    goods:['Wi-Fi', 'TV', 'Parking', 'Kitchen', 'Coffee machine', 'Heating'],
    host:{
      id: 123,
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      name: 'Avrora',
      isPro: true
    },
    reviews: reviews,
  }, {
    city: {
      location: {
        latitude: 52.3809553943508,
        longitude: 4.939309666406198,
        zoom: 10
      },
      name: 'Amsterdam'
    },
    id: 3243892,
    images: [
      'img/apartment-02.jpg',
      'img/apartment-03.jpg',
      'img/apartment-01.jpg',
      'img/apartment-02.jpg',
      'img/room.jpg',
      'img/apartment-small-04.jpg',
      'img/apartment-02.jpg',
    ],
    previewImage: 'img/apartment-02.jpg',
    title: 'Title.....title........title',
    description: 'Описываются самые лучшие стороны этого жилья . . . . . . . много текста . . . . . . . . . . . . . . . . много текста . . . . . . ',
    premium: true,
    type: 'Private Room',
    rating: 4.3,
    bedrooms: 5,
    maxAdults: 5,
    price: 1200,
    goods:['Wi-Fi', 'TV', 'Parking', 'Kitchen', 'Coffee machine', 'Heating'],
    host:{
      id: 123,
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      name: 'Avrora',
      isPro: true
    },
    reviews: reviews,
  }, {
    city: {
      location: {
        latitude: 52.3709553943508,
        longitude: 4.84209666406198,
        zoom: 10
      },
      name: 'Amsterdam'
    },
    id: 5689807,
    images: [
      'img/apartment-01.jpg',
      'img/apartment-small-03.jpg',
    ],
    previewImage: 'img/apartment-01.jpg',
    title: 'kdjvnd',
    description: 'lkvdsomdspmdspc',
    premium: true,
    type: 'Apartment',
    rating: 2.3,
    bedrooms: 3,
    maxAdults: 5,
    price: 1200,
    goods:['123', '345', '567'],
    host:{
      id: 345,
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      name: 'Richi',
      isPro: true
    },
    reviews: reviews,
  }, {
    city: {
      location: {
        latitude: 52.4009553943508,
        longitude: 4.85209666406198,
        zoom: 10
      },
      name: 'Amsterdam'
    },
    id: 5670908,
    images: [
      'img/apartment-01.jpg',
      'img/apartment-small-03.jpg',
    ],
    previewImage: 'img/apartment-01.jpg',
    title: 'kdjvnd',
    description: 'lkvdsomdspmdspc',
    premium: false,
    type: 'Apartment',
    rating: 1.3,
    bedrooms: 3,
    maxAdults: 5,
    price: 1200,
    goods:['123', '345', '567'],
    host:{
      id: 345,
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      name: 'Richi',
      isPro: true
    },
    reviews: reviews,
  }, {
    city: {
      location: {
        latitude: 52.3009553943508,
        longitude: 4.909309666406198,
        zoom: 10
      },
      name: 'Amsterdam'
    },
    id: 566787,
    images: [
      'img/apartment-01.jpg',
      'img/apartment-small-03.jpg',
    ],
    previewImage: 'img/apartment-01.jpg',
    title: 'kdjvnd',
    description: 'lkvdsomdspmdspc',
    premium: true,
    type: 'Apartment',
    rating: 3.0,
    bedrooms: 3,
    maxAdults: 5,
    price: 1200,
    goods:['123', '345', '567'],
    host:{
      id: 345,
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      name: 'Richi',
      isPro: true
    },
    reviews: reviews,
  }
];
