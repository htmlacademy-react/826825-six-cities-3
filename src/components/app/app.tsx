// import {Route, BrowserRouter, Routes} from 'react-router-dom';
import {Route, Routes} from 'react-router-dom';
import {HelmetProvider} from 'react-helmet-async';
import {useAppSelector} from '../../hooks';
import {AppRoute, AuthorizationStatus} from '../../const';
import Layout from '../layout/layout';
import MainScreen from '../../pages/main-screen/main-screen';
import FavoritesScreen from '../../pages/favorites-screen/favorites-screen';
import AuthScreen from '../../pages/auth-screen/auth-screen';
import OfferScreen from '../../pages/offer-screen/offer-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import PrivateRoute from '../private-route/private-route';
import {Offers} from '../../types/offer';
import {Comments} from '../../types/comment';
import LoadingScreen from '../../pages/loading-screen/loading-screen';
import HistoryRouter from '../history-route/history-route';
import browserHistory from '../../browser-history';

type AppScreenProps = {
  offers: Offers;
  comments: Comments;
}

function App({offers, comments} : AppScreenProps): JSX.Element {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const isOffersDataLoading = useAppSelector((state) => state.isOffersDataLoading);

  if (authorizationStatus === AuthorizationStatus.Unknown || isOffersDataLoading) {
    return (
      <LoadingScreen />
    );
  }
  return (
    <HelmetProvider>
      <HistoryRouter history={browserHistory}>
        <Routes>
          <Route path={AppRoute.Main}
            element={
              <Layout
                authorizationStatus={authorizationStatus}
              />
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
                <OfferScreen
                  offers={offers}
                  comments={comments}
                  onComment={() => {
                    throw new Error('Function \'onComment\' isn\'t implemented.');
                  }}
                />
              }
            />
            <Route
              path={AppRoute.Favorites}
              element = {
                <PrivateRoute
                  authorizationStatus={authorizationStatus}
                >
                  <FavoritesScreen
                    offers={offers}
                  />
                </PrivateRoute>
              }
            />
          </Route>
          <Route
            path={AppRoute.Login}
            element = {
              <AuthScreen
                authorizationStatus={authorizationStatus}
              />
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
