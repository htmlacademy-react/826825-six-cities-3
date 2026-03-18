import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import App from './components/app/app';
import {ToastContainer} from 'react-toastify';
import {comments} from './mocks/comments';
import {offers} from './mocks/offers';
import {store} from './store';
import {checkAuthAction, fetchOffersAction, fetchFavoriteOffersAction} from './store/api-actions';
import 'react-toastify/dist/ReactToastify.css';

store.dispatch(fetchOffersAction());
store.dispatch(fetchFavoriteOffersAction());
store.dispatch(checkAuthAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store = {store}>
    <ToastContainer />
      <App
        offers = {offers}
        comments = {comments}
      />
    </Provider>
  </React.StrictMode>
);
