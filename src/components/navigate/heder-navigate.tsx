import {Link} from 'react-router-dom';
import {useEffect, memo} from 'react';
import {AuthorizationStatus, AppRoute} from '../../const';
import HeaderUser from './heder-user';
import {logoutAction, fetchUserDataAction, fetchOffersAction} from '../../store/api-actions';
import {removeFavorite} from '../../store/offer-data/offer-data';
// import {getAuthorizationStatus} from '../../store/user-process/user-selectors';
import {getAuthCheckedStatus, getAuthorizationStatus, getUserData} from '../../store/user-process/user-selectors';
import {useAppDispatch, useAppSelector} from '../../hooks';


function HeaderNavigate(): JSX.Element {
  const dispatch = useAppDispatch();
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const handleClick = () => {
    dispatch(logoutAction());
    // dispatch(removeFavorite());
  };

  const isAuth = authorizationStatus === AuthorizationStatus.Auth;
  // const userData = useAppSelector(getUserData);

  useEffect(() => {
    if (isAuth) {
      dispatch(fetchUserDataAction());
    }
  },[isAuth]);

  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        {isAuth ?
          <>
            <HeaderUser/>
            <li className="header__nav-item">
              <Link
                to={AppRoute.Login}
                className="header__nav-link"
                onClick={handleClick}
              >
                <span className="header__signout">Sign out</span>
              </Link>
            </li>
          </> :
          <li className="header__nav-item">
            <Link
              to={AppRoute.Login}
              className="header__nav-link"
            >
              <div className="header__avatar-wrapper user__avatar-wrapper"></div>
              <span className="header__login">Sign in</span>
            </Link>
          </li>}
      </ul>
    </nav>
  );
}

export default memo(HeaderNavigate);
