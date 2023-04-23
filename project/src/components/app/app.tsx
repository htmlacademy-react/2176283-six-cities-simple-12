import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { APIRoute } from '../../const';
import WelcomePage from '../../pages/welcome-page/welcome-page';
import LoginPage from '../../pages/login-page/login-page';
import OfferPage from '../../pages/offer-page/offer-page';
import ErrorPage from '../../pages/error-page/error-page';
import { useAppSelector } from '../../hooks';

function App(): JSX.Element {
  const authorizationStatus = useAppSelector((state) =>
    state.authorizationStatus);
  const isOffersDataLoading = useAppSelector((state) =>
    state.isOffersDataLoading);
  const currentEmail = useAppSelector((state) => state.email);

  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={APIRoute.Root}
            element = {<WelcomePage isOffersDataLoading = {isOffersDataLoading} authorizationStatus = {authorizationStatus} currentEmail = {currentEmail}/>}
          />
          <Route
            path={APIRoute.Login}
            element = {<LoginPage/>}
          />
          <Route
            path={APIRoute.Offers.concat('/:id')}
            element = {<OfferPage authorizationStatus = {authorizationStatus} currentEmail = {currentEmail}/>}
          />
          <Route
            path={APIRoute.NoFound}
            element = {<ErrorPage/>}
          />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
