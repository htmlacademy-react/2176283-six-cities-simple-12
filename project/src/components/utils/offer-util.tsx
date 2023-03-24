import { Host } from '../../types/host';
import { Reviews } from '../../types/review';

export const stars = (item: number) => `${Math.round(item) * 20}%`;

export const premiumSticker = (item: boolean) => {
  if (item === true) {
    return (
      <div className="property__mark">
        <span>Premium</span>
      </div>
    );
  }
  else {
    return '';
  }
};

export const statusPro = (item: Host) => {
  if (item.isPro === true) {
    return (
      <span className="property__user-status">
        Pro
      </span>
    );
  } else {
    return '';
  }
};

export const star = (item: Host) => {
  if (item.isPro === true) {
    return ('--pro');
  }
  else { return ''; }
};

export const collage = (items: string[]) => {
  if (items.length) {
    const template = items.map((item, id) => (
      <div key={`${id}-${item}`} className="property__image-wrapper">
        <img className="property__image" src={item} alt="studio"/>
      </div>
    ));
    return template.slice(0, 6);
  }
};

export const optionsList = (items: string[]) => {
  if (items.length) {
    const template = items.map((item, id) => (
      <li key={`${id}-${item}`} className="property__inside-item">
        {item}
      </li>
    ));
    return template;
  }
};

export const reviewsList = (items: Reviews) => {
  if (items.length) {
    const template = items.map((item, id) => (
      <li key={`${id}-${item.avatar}`}className="reviews__item">
        <div className="reviews__user user">
          <div className="reviews__avatar-wrapper user__avatar-wrapper">
            <img className="reviews__avatar user__avatar" src={item.avatar} width="54" height="54" alt="Reviews avatar"/>
          </div>
          <span className="reviews__user-name">
            {item.name}
          </span>
        </div>
        <div className="reviews__info">
          <div className="reviews__rating rating">
            <div className="reviews__stars rating__stars">
              <span style={{width: stars(item.estimation)}}></span>
              <span className="visually-hidden">{item.estimation}</span>
            </div>
          </div>
          <p className="reviews__text">
            {item.text}
          </p>
          <time className="reviews__time" dateTime={item.date}>April 2019</time>
        </div>
      </li>
    ));
    return template;
  }
};
