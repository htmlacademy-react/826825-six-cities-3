import {Route, Routes} from 'react-router-dom';
// import {useEffect} from 'react';
import {HelmetProvider} from 'react-helmet-async';
import {AppRoute} from '../../const';
import {useAppDispatch} from '../../hooks';
import Layout from '../layout/layout';
import MainScreen from '../../pages/main-screen/main-screen';
import FavoritesScreen from '../../pages/favorites-screen/favorites-screen';
import AuthScreen from '../../pages/auth-screen/auth-screen';
import OfferScreen from '../../pages/offer-screen/offer-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import PrivateRoute from '../private-route/private-route';
import HistoryRouter from '../history-route/history-route';
import browserHistory from '../../browser-history';
import {fetchUserDataAction} from '../../store/api-actions';

function App(): JSX.Element {

  const dispatch = useAppDispatch();

  // dispatch(fetchUserDataAction());

  return (
    <HelmetProvider>
      <HistoryRouter history={browserHistory}>
        <Routes>
          <Route path={AppRoute.Main}
            element={
              <Layout/>
            }
          >
            <Route
              path={AppRoute.Main}
              element={
                <MainScreen/>
              }
            />
            <Route
              path={AppRoute.Offer}
              element={
                <OfferScreen/>
              }
            />
            <Route
              path={AppRoute.Favorites}
              element = {
                <PrivateRoute>
                  <FavoritesScreen/>
                </PrivateRoute>
              }
            />
          </Route>
          <Route
            path={AppRoute.Login}
            element = {
              <AuthScreen/>
            }
          />
          <Route
            path="*"
            element={<NotFoundScreen />}
          />
        </Routes>
      </HistoryRouter>
    </HelmetProvider>
  );
}

export default App;
