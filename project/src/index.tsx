import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './components/app/app';
import { store } from './store';
import { fetchCommentsAction, fetchOffersAction } from './store/api-actions';
import ErrorMessage from './components/error-message/error-message';
import { checkAuthAction } from './store/api-actions';

const Setting = {
  NearbyOfferCount: 3,
} as const;

store.dispatch(checkAuthAction());
store.dispatch(fetchOffersAction());
store.dispatch(fetchCommentsAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store = {store}>
      <ErrorMessage/>
      <App
        nearbyOfferCount = {Setting.NearbyOfferCount}
      />
    </Provider>
  </React.StrictMode>,
);
