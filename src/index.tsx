import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import {Setting} from './const';
import {comments} from './mocks/comments';
import {offers} from './mocks/offers';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
      placeCount = {Setting.placeCount}
      offers = {offers}
      comments = {comments}
    />
  </React.StrictMode>
);
