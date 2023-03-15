import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {HelmetProvider} from 'react-helmet-async';
import { AppRoute } from '../../const';
import WelcomePage from '../../pages/welcome-page/welcome-page';
import WelcomeEmptyPage from '../../pages/welcome-empty-page/welcome-empty-page';
import LoginPage from '../../pages/login-page/login-page';
import OfferUserLoggedPage from '../../pages/offer-user-logged-page/offer-user-logged-page';
import OfferUserNotLoggedPage from '../../pages/offer-user-not-logged-page/offer-usser-not-logged-page';
import ErrorPage from '../../pages/error-page/error-page';

type AppWelcomePageProps = {
  offerCount: number;
}

function App({offerCount}: AppWelcomePageProps): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Root}
            element = {<WelcomePage offerCount={offerCount}/>}
          />
          <Route
            path={AppRoute.Root}
            element = {<WelcomeEmptyPage/>}
          />
          <Route
            path={AppRoute.Login}
            element = {<LoginPage/>}
          />
          <Route
            path={AppRoute.Offer}
            element = {<OfferUserLoggedPage/>}
          />
          <Route
            path={AppRoute.Offer}
            element = {<OfferUserNotLoggedPage/>}
          />
          <Route
            path="*"
            element = {<ErrorPage/>}
          />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
