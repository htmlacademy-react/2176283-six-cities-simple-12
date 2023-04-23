import { Offer } from '../../types/offer';
import { Link } from 'react-router-dom';
import { starsRating } from '../../hooks/stars-rating/stars-rating';
import { StickerProCard } from '../sticker-pro-card/sticker-pro-card';
import { MouseEventHandler } from 'react';
import { APIRoute } from '../../const';

type OfferCardProps = {
  offer: Offer;
  onMouseOver: MouseEventHandler<HTMLElement>;
  onMouseOut: MouseEventHandler<HTMLElement>;
}

function OfferCard({offer, onMouseOver, onMouseOut}: OfferCardProps): JSX.Element {

  const {id, price, type, rating, title, previewImage, premium} = offer;

  return (
    <article className="cities__card place-card" onMouseOver={onMouseOver} onMouseOut={onMouseOut}>
      <StickerProCard premium={premium}/>
      <div className="cities__image-wrapper place-card__image-wrapper" >
        <Link to={APIRoute.Offers.concat(`/${id}`)}>
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
            <span style={{width: starsRating(rating)}}></span>
            <span className="visually-hidden">{rating}</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={APIRoute.Offers.concat(`/${id}`)}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default OfferCard;
