import { Host } from './host';
import { Reviews } from './review';

export type Offer = {
  city: object;
  location: object;
  id: number; //уникальный идентификатор
  images: string[]; //Фотографии. Выводится до 6-ти изображений.
  previewImage: string;
  title: string; //Заголовок. Краткое описание предложения, например: «Beautiful & luxurious studio at great location».
  description: string; //Подробное описание.
  premium: boolean;
  type: string; //Тип жилья. Одно из значений: apartment (Apartment), room (Private Room), house (House), hotel (Hotel).
  rating: number; //Рейтинг. Оценка предложения отображается в виде закрашенных звезд и среднего балла (например, 4.8). Максимальное количество звёзд — 5.
  bedrooms: number; //Количество спален. Например, 3 Bedrooms.
  maxAdults: number; //Максимальное количество гостей. Например, Max 4 adults.
  price: number; //Стоимость аренды за ночь. Сумма всегда отображается в евро.
  goods: string[]; //Список бытовых предметов в квартире (Wifi, Heating, Kitchen, Cable TV и т. д.);
  host: Host; //Информация о хозяине: аватарка, имя, отметка pro (звёздочка возле аватарки) и подпись Pro под именем хозяина.
  reviews:Reviews; //Отзывы пользователей. В заголовке блока отображается общее количество отзывов. Например: Reviews 12.
}

export type Offers = Offer[];
