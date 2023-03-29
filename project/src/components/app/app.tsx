import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AppRoute } from '../../const';
import WelcomePage from '../../pages/welcome-page/welcome-page';
import LoginPage from '../../pages/login-page/login-page';
import OfferUserLoggedPage from '../../pages/offer-user-logged-page/offer-user-logged-page';
import ErrorPage from '../../pages/error-page/error-page';
import { Offers } from '../../types/offer';

type AppWelcomePageProps = {
  offerCount: number;
  offers: Offers;
}

function App({offerCount, offers}: AppWelcomePageProps): JSX.Element {

  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Root}
            element = {<WelcomePage offerCount={offerCount} offers = {offers}/>}
          />
          <Route
            path={AppRoute.Login}
            element = {<LoginPage/>}
          />
          <Route
            path={AppRoute.Offer}
            element = {<OfferUserLoggedPage offers={offers}/>}
          />
          <Route
            path={AppRoute.NoFound}
            element = {<ErrorPage/>}
          />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
