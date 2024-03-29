import { Helmet } from 'react-helmet-async';
import OffersList from '../offers-list/offers-list';
import LocationsList from '../../components/locations-list/locations-list';
import Map from '../../components/map/map';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeCity } from '../../store/action';
import { City } from '../../types/city';
import SortingOptions from '../../components/sorting-options/sorting-options';
import { sortOffers } from '../../utils/sort-offers';
import LoadingPage from '../../pages/loading-page/loading-page';
import HeaderNav from '../../components/header-nav/header-nav';
import { AuthorizationStatus } from '../../const';
import { fetchOffersAction } from '../../store/api-actions';
import WelcomeEmptyPage from '../../components/welcome-empty-page/welcome-empty-page';
import { UserData } from '../../types/user-data';

type WelcomePageProps = {
  isOffersDataLoading: boolean;
  authorizationStatus: AuthorizationStatus;
  currentUser: UserData | null;
}

function WelcomePage({isOffersDataLoading, authorizationStatus, currentUser}: WelcomePageProps): JSX.Element {

  const dispatch = useAppDispatch();

  const offers = useAppSelector((state) => state.offers);
  const currentCity = useAppSelector((state) => state.city);
  const currentOffers = useAppSelector(() => offers.filter((offer) => offer.city.name === currentCity.name));
  const [selectedOffer, setSelectedOffer] = useState({});
  const currenSorting = useAppSelector((state) => state.sorting);

  useEffect(() => {
    let isNeedUpdate = true;

    if (isNeedUpdate) {
      if (offers.length === 0) {
        dispatch(fetchOffersAction());
      }
    }
    return () => {
      isNeedUpdate = false;
    };
  }, [dispatch, offers]);

  const onCityClick = (city: City) => {dispatch(changeCity(city));};

  const handleListOfferHover = (listOfferId: number | null) => {
    const currentOffer = currentOffers.find((offer) =>
      offer.id === listOfferId,
    );
    if(currentOffer) {
      setSelectedOffer(currentOffer);
    }
    else {
      setSelectedOffer('');
    }
  };

  return (
    <body className="page page--gray page--main">
      <div style={{display: 'none'}}>
        <Helmet>
          <title>six cities simple welcome</title>
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
              <a className="header__logo-link header__logo-link--active" href="/">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
              </a>
            </div>

            <HeaderNav authorizationStatus={authorizationStatus} currentUser={currentUser}/>

          </div>
        </div>
      </header>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">

            <LocationsList locations={currentCity} onCityClick={onCityClick}/>

          </section>
        </div>

        {(currentOffers.length) ?
          <div className="cities">
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{currentOffers.length} places to stay in {currentCity.name}</b>

                <SortingOptions currenSorting={currenSorting}/>

                {(authorizationStatus === AuthorizationStatus.Unknown || isOffersDataLoading) ?
                  <LoadingPage/> :
                  <OffersList offers={sortOffers(currentOffers, currenSorting)} className={'cities__card'} classList={'cities__places-list places__list tabs__content'} onListOfferHover={handleListOfferHover}/>}

              </section>
              <div className="cities__right-section">

                <Map city = {currentCity} offers={currentOffers} className={'cities__map'} selectedOffer={selectedOffer}/>

              </div>
            </div>
          </div> : <WelcomeEmptyPage city = {currentCity.name}/>}

      </main>
    </body>
  );
}

export default WelcomePage;
