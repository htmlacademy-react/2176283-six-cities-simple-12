import { Review } from '../types/review';

const AVATAR_URL = 'https://i.pravatar.cc/128';

export const reviews: Review[] = [{
  avatar: `${AVATAR_URL}?rnd=${Math.random()}`,
  name: 'John',
  estimation: 4,
  date: '2009-09-09',
  text: 'Впечатления от посещения............ Много текста............',
}, {
  avatar: `${AVATAR_URL}?rnd=${Math.random()}`,
  name: 'Sara',
  estimation: 5,
  date: '2010-10-10',
  text: 'Что-то там про прибывание.........Красивое описание.........',
}, {
  avatar: `${AVATAR_URL}?rnd=${Math.random()}`,
  name: 'Meggie',
  estimation: 3,
  date: '2011-11-11',
  text: 'Отлично провели время.................частичка возмущения........',
}, {
  avatar: `${AVATAR_URL}?rnd=${Math.random()}`,
  name: 'Meggie',
  estimation: 3,
  date: '2011-11-11',
  text: 'Отлично провели время.................частичка возмущения........',
}];
