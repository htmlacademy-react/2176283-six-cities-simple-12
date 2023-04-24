import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import CommentSubmitForm from '../../components/comment-submit-form/comment-submit-form';
import Logo from '../../components/logo/logo';
import { stickerPro } from '../../hooks/sticker-pro/sticker-pro';
import { starsRating } from '../../hooks/stars-rating/stars-rating';
import { PremiumSticker } from '../../components/premium-sticker/premium-sticker';
import { StatusPro } from '../../components/status-pro/status-pro';
import ReviewsList from '../../components/reviews-list/reviews-list';
import Map from '../../components/map/map';
import OffersList from '../offers-list/offers-list';
import { useAppDispatch, useAppSelector } from '../../hooks';
import HeaderNav from '../../components/header-nav/header-nav';
import { AuthorizationStatus, IMAGE_QUANTITY } from '../../const';
import { fetchCommentsAction, fetchOfferSelectedAction, fetchOffersNearbyAction } from '../../store/api-actions';
import { useEffect } from 'react';
import LoadingPage from '../loading-page/loading-page';

type OfferPageProps = {
  authorizationStatus: AuthorizationStatus;
  currentEmail: string | null;
}

function OfferPage({authorizationStatus, currentEmail}: OfferPageProps): JSX.Element {

  const dispatch = useAppDispatch();

  const { id } = useParams();
  const userId = Number(id);

  useEffect(() => {
    dispatch(fetchCommentsAction(userId));
    dispatch(fetchOffersNearbyAction(userId));
    dispatch(fetchOfferSelectedAction(userId));
  }, [dispatch, userId]);

  const currentOffer = useAppSelector((state) => state.offerSelected);
  const offersNearby = useAppSelector((state) => state.offersNearby);
  const currentCity = useAppSelector((state) => state.city);
  const comments = useAppSelector((state) => state.comments);

  if(!currentOffer) {
    return <LoadingPage/>;
  }

  const {images, title, description, premium, type, rating, bedrooms, maxAdults, price, goods, host} = currentOffer;

  return (
    <div className="page">
      <div style={{display: 'none'}}>
        <Helmet>
          <title>six cities simple room</title>
        </Helmet>
        <svg xmlns="http://www.w3.org/2000/svg">
          <symbol id="icon-arrow-select" viewBox="0 0 7 4">
            <path fillRule="evenodd" clipRule="evenodd" d="M0 0l3.5 2.813L7 0v1.084L3.5 4 0 1.084V0z">
            </path>
          </symbol>
          <symbol id="icon-bookmark" viewBox="0 0 17 18">
            <path d="M3.993 2.185l.017-.092V2c0-.554.449-1 .99-1h10c.522 0 .957.41.997.923l-2.736 14.59-4.814-2.407-.39-.195-.408.153L1.31 16.44 3.993 2.185z">
            </path>
          </symbol>
          <symbol id="icon-star" viewBox="0 0 13 12">
            <path fillRule="evenodd" clipRule="evenodd" d="M6.5 9.644L10.517 12 9.451 7.56 13 4.573l-4.674-.386L6.5 0 4.673 4.187 0 4.573 3.549 7.56 2.483 12 6.5 9.644z">
            </path>
          </symbol>
        </svg>
      </div>

      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">

              <Logo/>

            </div>

            <HeaderNav authorizationStatus={authorizationStatus} currentEmail={currentEmail}/>

          </div>
        </div>
      </header>

      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">

              {images.map((image) => (
                <div key={`${image}`} className="property__image-wrapper">
                  <img className="property__image" src={image} alt="studio"/>
                </div>
              )).slice(0, IMAGE_QUANTITY)}

            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              <PremiumSticker premium={premium}/>
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {title}
                </h1>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: starsRating(rating)}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {bedrooms} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max {maxAdults} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">

                  {goods.map((good) => (
                    <li key={`${good}`} className="property__inside-item">
                      {good}
                    </li>
                  ))}

                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className={`property__avatar-wrapper property__avatar-wrapper${stickerPro(host)} user__avatar-wrapper`}>
                    <img className="property__avatar user__avatar" src={host.avatarUrl} width="74" height="74" alt="Host avatar"/>
                  </div>
                  <span className="property__user-name">
                    {host.name}
                  </span>
                  {<StatusPro host={host}/>}
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {description}
                  </p>
                </div>
              </div>
              <section className="property__reviews reviews">
                <h2 className="reviews__title">Reviews &middot;
                  <span className="reviews__amount">{comments.length}</span>
                </h2>

                <ReviewsList reviews={comments} starsRating={starsRating}/>

                {(authorizationStatus === AuthorizationStatus.Auth) ? <CommentSubmitForm currentOfferId={userId}/> : ''}

              </section>
            </div>
          </div>
          <section className="property__map map">

            <Map city = {currentCity} offers={offersNearby} selectedOffer={currentOffer}/>

          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">

              <OffersList offers={offersNearby} />

            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default OfferPage;
