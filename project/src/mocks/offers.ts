import { Offers } from '../types/offer';
import { reviews } from './reviews';

const AVATAR_URL = 'https://i.pravatar.cc/128';

export const offers: Offers = [
  {
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
    title: 'Title............title.............title',
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
    id: 567,
    images: [
      'img/apartment-01.jpg',
      'img/apartment-small-03.jpg',
    ],
    previewImage: 'img/apartment-01.jpg',
    title: 'kdjvnd',
    description: 'lkvdsomdspmdspc',
    premium: false,
    type: 'Apartment',
    rating: 4.3,
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
