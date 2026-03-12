import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import App from './components/app/app';
import {Setting} from './const';
import {comments} from './mocks/comments';
import {offers} from './mocks/offers';
import {store} from './store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store = {store}>
      <App
        placeCount = {Setting.placeCount}
        offers = {offers}
        comments = {comments}
      />
    </Provider>
  </React.StrictMode>
);
