import {Route, Routes} from 'react-router-dom';
import {useEffect} from 'react';
import {HelmetProvider} from 'react-helmet-async';
import {AppRoute} from '../../const';
import {useAppDispatch, useAppSelector} from '../../hooks';
import Layout from '../layout/Layout';
import MainLayout from '../layout/main-layout';
import FavoritesLayout from '../layout/favorites-layout';
import MainScreen from '../../pages/main-screen/main-screen';
import FavoritesScreen from '../../pages/favorites-screen/favorites-screen';
import AuthScreen from '../../pages/auth-screen/auth-screen';
import OfferScreen from '../../pages/offer-screen/offer-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import PrivateRoute from '../private-route/private-route';
import HistoryRouter from '../history-route/history-route';
import browserHistory from '../../browser-history';
import {fetchUserDataAction} from '../../store/api-actions';
import {getAuthCheckedStatus, getAuthorizationStatus, getUserData} from '../../store/user-process/user-selectors';
import {AuthorizationStatus} from '../../const';

function App(): JSX.Element {

  const dispatch = useAppDispatch();
  const isAuth = useAppSelector(getAuthCheckedStatus);
  const userData = useAppSelector(getUserData);

  // useEffect(() => {
  //   if (isAuth || userData === null) {
  //     dispatch(fetchUserDataAction());
  //   }
  // },[]);

  return (
    <HelmetProvider>
      <HistoryRouter history={browserHistory}>
        <Routes>
          <Route
            element={<MainLayout/>}
          >
            <Route
              path={AppRoute.Main}
              element={
                <MainScreen/>
              }
            />
          </Route>
          <Route
            element={<Layout/>}
          >
            <Route
              path={AppRoute.Offer}
              element={
                <OfferScreen/>
              }
            />
          </Route>
          <Route
            element={<FavoritesLayout/>}
          >
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
            element={<Layout/>}
          >
            <Route
              path="*"
              element={<NotFoundScreen />}
            />
          </Route>
          <Route
            path={AppRoute.Login}
            element = {
                <AuthScreen/>
            }
          />
          
        </Routes>
      </HistoryRouter>
    </HelmetProvider>
  );
}

export default App;
