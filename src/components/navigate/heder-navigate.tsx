import {Link} from 'react-router-dom';
import {useEffect, memo} from 'react';
import {AuthorizationStatus, AppRoute} from '../../const';
import HeaderUser from './heder-user';
import {logoutAction, fetchUserDataAction} from '../../store/api-actions';
import {getAuthorizationStatus} from '../../store/user-process/user-selectors';
import {useAppDispatch, useAppSelector} from '../../hooks';


function HeaderNavigate(): JSX.Element {
  const dispatch = useAppDispatch();
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const isAuth = authorizationStatus === AuthorizationStatus.Auth;
  const handleClick = () => {
    dispatch(logoutAction());
  };

  useEffect(() => {

    if (isAuth) {
      dispatch(fetchUserDataAction());
    }
  },[dispatch, isAuth]);

  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        {isAuth ?
          <>
            <HeaderUser/>
            <li className="header__nav-item">
              <Link
                to={AppRoute.Main}
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
