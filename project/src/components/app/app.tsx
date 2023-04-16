import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AppRoute } from '../../const';
import WelcomePage from '../../pages/welcome-page/welcome-page';
import LoginPage from '../../pages/login-page/login-page';
import OfferUserLoggedPage from '../../pages/offer-user-logged-page/offer-user-logged-page';
import ErrorPage from '../../pages/error-page/error-page';
import LoadingPage from '../../pages/loading-page/loading-page';
import { useAppSelector } from '../../hooks';

type AppWelcomePageProps = {
  nearbyOfferCount: number;
}

function App({nearbyOfferCount}: AppWelcomePageProps): JSX.Element {
  const isOffersDataLoading = useAppSelector((state) =>
    state.isOffersDataLoading);

  if (isOffersDataLoading) {
    return (<LoadingPage/>);
  }
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Root}
            element = {<WelcomePage/>}
          />
          <Route
            path={AppRoute.Login}
            element = {<LoginPage/>}
          />
          <Route
            path={AppRoute.Offer}
            element = {<OfferUserLoggedPage nearbyOfferCount={nearbyOfferCount}/>}
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
