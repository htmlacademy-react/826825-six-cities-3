import {Link} from 'react-router-dom';
import {AuthorizationStatus, AppRoute} from '../../const';
import HeaderUser from './heder-user';
import {logoutAction} from '../../store/api-actions';
import {useAppDispatch} from '../../hooks';

type HeaderNavigateProps = {
  authorizationStatus: AuthorizationStatus;
}

function HeaderNavigate(props: HeaderNavigateProps): JSX.Element {
  const {authorizationStatus} = props;
  const dispatch = useAppDispatch();
  const handleLogOut = () => dispatch(logoutAction());
  

  // const linkName = authorizationStatus === AuthorizationStatus.Auth? 'Sign out' : 'Sign in';

  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        {authorizationStatus === AuthorizationStatus.Auth ?
          <>
          <HeaderUser/>
          <li className="header__nav-item">
            <Link 
              className="header__nav-link"
              onClick={handleLogOut}
              
            >
              <span className="header__signout">Sign out</span>
            </Link>
          </li>
          </>: 
          <li className="header__nav-item">
            <Link 
              to={AppRoute.Login}
              className="header__nav-link"
            >
              <div className="header__avatar-wrapper user__avatar-wrapper"></div>
              <span className="header__login">Sign in</span>
            </Link>
          </li>
        }
      </ul>
    </nav>
  );
}

export default HeaderNavigate;
