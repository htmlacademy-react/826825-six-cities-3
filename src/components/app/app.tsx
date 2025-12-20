import {Route, BrowserRouter, Routes} from 'react-router-dom';
import {HelmetProvider} from 'react-helmet-async';
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

type AppScreenProps = {
  placeCount: number;
  offers: Offers;
  comments: Comments;
}

const statusAuthorisation: AuthorizationStatus = AuthorizationStatus.Auth;

function App({placeCount, offers, comments} : AppScreenProps): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path={AppRoute.Main}
            element={
              <Layout
                authorizationStatus={statusAuthorisation}
              />
            }
          >
            <Route
              path={AppRoute.Main}
              element={
                <MainScreen
                  placeCount={placeCount}
                  offers={offers}
                />
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
                  authorizationStatus={statusAuthorisation}
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
                authorizationStatus={statusAuthorisation}
              />
            }
          />
          <Route
            path="*"
            element={<NotFoundScreen />}
          />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
