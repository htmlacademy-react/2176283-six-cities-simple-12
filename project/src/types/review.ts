export type Review = { //Отзыв содержит:
avatar: string; //Аватар автора.
name: string; //Имя автора.
estimation: number; //Оценку. Оценка выводится в виде закрашенных звезд. Максимальное количество звёзд — 5.
date: string; //Дата отзыва в формате: Месяц Год. Например: April 2019.
text: string; //Текст отзыва.
}

export type Reviews = Review[];
