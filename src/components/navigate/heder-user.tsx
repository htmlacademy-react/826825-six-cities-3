import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import {useAppSelector} from '../../hooks';
// import {fetchUserDataAction} from '../../store/api-actions';

function HeaderUser(): JSX.Element {
  // const dispatch = useAppDispatch();
  // dispatch(fetchUserDataAction());

  const favoriteCount:number = useAppSelector((state) => state.favoriteOffers).length;
  const userData = useAppSelector((state) => state.userData);

  return (
    <li className="header__nav-item user">
      <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Favorites}>
        <div className="header__avatar-wrapper user__avatar-wrapper">
          <img src={userData.avatarUrl}></img>
        </div>
        <span className="header__user-name user__name">{userData.email}</span>
        <span className="header__favorite-count">{favoriteCount}</span>
      </Link>
    </li>
  );
}

export default HeaderUser;
