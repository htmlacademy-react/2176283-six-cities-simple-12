import { Offers } from '../types/offer';
import { reviews } from './reviews';

const AVATAR_URL = 'https://i.pravatar.cc/128';

export const offers: Offers = //[
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
  }/*, {
    id: 567,
    photos: [{
      src:'img/apartment-01.jpg',
      alt:'foto'
    }, {
      src:'img/apartment-small-03.jpg',
      alt: 'ffddd'
    }],
    title: 'kdjvnd',
    description: 'lkvdsomdspmdspc',
    premium: false,
    type: 'apartment',
    rating: 4.3,
    rooms: 3,
    guests: 5,
    price: 1200,
    options:['123', '345', '567'],
    host:{
      avatar: {
        src: `${AVATAR_URL}?rnd=${Math.random()}`,
        alt: 'avatar'
      },
      name: 'Richi',
      mark: true
    },
  }
];*/
