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
import LoadingScreen from '../../pages/loading-screen/loading-screen';
import HistoryRouter from '../history-route/history-route';
import browserHistory from '../../browser-history';


function App(): JSX.Element {
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
                  <FavoritesScreen/>
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
