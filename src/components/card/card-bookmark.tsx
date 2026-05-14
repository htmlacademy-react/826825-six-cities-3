import {useState, memo} from 'react';
import classnames from 'classnames';
import {Navigate} from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/index';
import {getAuthorizationStatus} from '../../store/user-process/user-selectors';
import {favoriteChangeAction} from '../../store/api-actions';
import {AuthorizationStatus, AppRoute, FavoriteStatus} from '../../const';

type CardBookmarkProps = {
  id: string;
  isFavorite: boolean;
  bemBlock?: string;
}


function CardBookmark({id, isFavorite, bemBlock = 'place-card'}: CardBookmarkProps) : JSX.Element {
  const [isFavoriteStatus, setFavoriteStatus] = useState(isFavorite);
  const [redirectToLogin, setRedirectToLogin] = useState(false);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  const bookMarks = isFavoriteStatus ? 'In bookmarks' : 'To bookmarks';
  const pageClassActive = `${bemBlock}__bookmark-button--active`;
  const iconWidth = bemBlock === 'offer' ? '31' : '18';
  const iconHeight = bemBlock === 'offer' ? '33' : '19';
  const dispatch = useAppDispatch();

  const handleBookmark = () => {
    if (authorizationStatus !== AuthorizationStatus.Auth) {
      setRedirectToLogin(true);
      return
    }
    setFavoriteStatus(!isFavoriteStatus);
    dispatch(favoriteChangeAction({
      id: id,
      favoriteStatus: !isFavoriteStatus ? FavoriteStatus.Addad : FavoriteStatus.Removed,
    }));
  };

  if (redirectToLogin) {
    return <Navigate to={AppRoute.Login} />;
  }

  return (
    <button
      onClick={handleBookmark}
      className={classnames(`${bemBlock}__bookmark-button`, 'button', isFavoriteStatus? pageClassActive : '')}
      type="button"
    >
      <svg
        className={`${bemBlock}__bookmark-icon`}
        width={iconWidth}
        height={iconHeight}
      >
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">{bookMarks}</span>
    </button>
  );

}

export default memo(CardBookmark);
