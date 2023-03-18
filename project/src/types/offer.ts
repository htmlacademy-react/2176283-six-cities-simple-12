import { Host } from './host';

export type Photo = {
  src: string;
  alt: string;
}

export type Offer = {
  id: number; //уникальный идентификатор
  photos: Photo[]; //Фотографии. Выводится до 6-ти изображений.
  title: string; //Заголовок. Краткое описание предложения, например: «Beautiful & luxurious studio at great location».
  description: string; //Подробное описание.
  premium: boolean;
  type: string; //Тип жилья. Одно из значений: apartment (Apartment), room (Private Room), house (House), hotel (Hotel).
  rating: number; //Рейтинг. Оценка предложения отображается в виде закрашенных звезд и среднего балла (например, 4.8). Максимальное количество звёзд — 5.
  rooms: number; //Количество спален. Например, 3 Bedrooms.
  guests: number; //Максимальное количество гостей. Например, Max 4 adults.
  price: number; //Стоимость аренды за ночь. Сумма всегда отображается в евро.
  options: string[]; //Список бытовых предметов в квартире (Wifi, Heating, Kitchen, Cable TV и т. д.);
  host: Host; //Информация о хозяине: аватарка, имя, отметка pro (звёздочка возле аватарки) и подпись Pro под именем хозяина.
  //Отзывы пользователей. В заголовке блока отображается общее количество отзывов. Например: Reviews 12.
}
