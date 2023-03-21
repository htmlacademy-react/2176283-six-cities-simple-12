import { Offer } from '../types/offer';

type OfferUserLoggedPageProps = {
  offer: Offer;
}

function OfferCard(props: OfferUserLoggedPageProps): JSX.Element {
  const {offer} = props;
  const {price, type, rating, title, previewImage, premium} = offer;

  const premiumSticker = () => {
    if (premium === true) {
      return (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      );
    }
    else {
      return '';
    }
  };
  const star = () => `${Math.floor(rating * 2) * 10}%`;
  return (
    <article className="cities__card place-card">
      {premiumSticker()}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#todo">
          <img className="place-card__image" src={previewImage} width="260" height="200" alt="Place"/>
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: star()}}></span>
            <span className="visually-hidden">{rating}</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#todo">{title}</a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default OfferCard;
