import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './components/app/app';
import { store } from './store';
import { fetchOffersAction } from './store/api-actions';

const Setting = {
  NearbyOfferCount: 3,
} as const;

store.dispatch(fetchOffersAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store = {store}>
      <App
        nearbyOfferCount = {Setting.NearbyOfferCount}
      />
    </Provider>
  </React.StrictMode>,
);
