import { Offers } from '../types/offer';

const AVATAR_URL = 'https://i.pravatar.cc/128';

export const offers: Offers = [
  {
    id: 3242,
    photos: [{
      src:'fkjnl',
      alt:'foto'
    }, {
      src:'dlknsdlvnd',
      alt: 'ffddd'
    }], //Фотографии. Выводится до 6-ти изображений.
    title: 'kdjvnd', //Заголовок. Краткое описание предложения, например: «Beautiful & luxurious studio at great location».
    description: 'lkvdsomdspmdspc', //Подробное описание.
    premium: false,
    type: 'apartment', //Тип жилья. Одно из значений: apartment (Apartment), room (Private Room), house (House), hotel (Hotel).
    rating: 4.3, //Рейтинг. Оценка предложения отображается в виде закрашенных звезд и среднего балла (например, 4.8). Максимальное количество звёзд — 5.
    rooms: 3, //Количество спален. Например, 3 Bedrooms.
    guests: 5, //Максимальное количество гостей. Например, Max 4 adults.
    price: 1200, //Стоимость аренды за ночь. Сумма всегда отображается в евро.
    options:['Wi-Fi', 'TV', 'Parking'], //Список бытовых предметов в квартире (Wifi, Heating, Kitchen, Cable TV и т. д.);
    host:{
      avatar: {
        src: `${AVATAR_URL}?rnd=${Math.random()}`,
        alt: 'avatar'},
      name: 'Avrora',
      mark: false
    }, //Информация о хозяине: аватарка, имя, отметка pro (звёздочка возле аватарки) и подпись Pro под именем хозяина.
  }, {
    id: 567,
    photos: [{
      src:'khrkuhgrhf',
      alt:'foto'
    }, {
      src:'dlknsdlvnd',
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
];
