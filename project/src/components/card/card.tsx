import { Offer } from '../../types/offer';
import { Link } from 'react-router-dom';
import { premiumSticker, star } from '../utils/card-util';

type OfferUserLoggedPageProps = {
  offer: Offer;
}

function OfferCard({offer}: OfferUserLoggedPageProps): JSX.Element {

  const {id, price, type, rating, title, previewImage, premium} = offer;

  return (
    <>
      {premiumSticker(premium)}
      <div className="cities__image-wrapper place-card__image-wrapper" >
        <Link to={`/offer/${id}`}>
          <img className="place-card__image" src={previewImage} width="260" height="200" alt="Place"/>
        </Link>
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
            <span style={{width: star(rating)}}></span>
            <span className="visually-hidden">{rating}</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </>
  );
}

export default OfferCard;
