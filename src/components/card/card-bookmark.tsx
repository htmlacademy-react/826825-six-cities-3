import {useState} from 'react';
import classnames from 'classnames';
import {Navigate} from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/index';
import {getAuthorizationStatus} from '../../store/user-process/user-selectors';
import {favoriteChangeAction} from '../../store/api-actions';
import {replaceOffer} from '../../store/offer-data/offer-data';
import {AuthorizationStatus, AppRoute, PAGES} from '../../const';

type CardBookmarkProps = {
  id: string;
  isFavorite: boolean;
  page?: string;
}


function CardBookmark({id, isFavorite, page}: CardBookmarkProps) : JSX.Element {
  const [isFavoriteStatus, setFavoriteStatus] = useState(isFavorite);
  const [redirectToLogin, setRedirectToLogin] = useState(false);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  const bookMarks = isFavoriteStatus ? 'In bookmarks' : 'To bookmarks';
  const pageClass = page === PAGES.offer ? 'offer' : 'place-card';
  const pageClassActive = `${pageClass}__bookmark-button--active`;
  const iconWidth = page === PAGES.offer ? '31' : '18';
  const iconHeight = page === PAGES.offer ? '33' : '19';
  const dispatch = useAppDispatch();

  const handleBookmark = () => {
    if (authorizationStatus !== AuthorizationStatus.Auth) {
      setRedirectToLogin(true);

      return;
    }
    setFavoriteStatus(!isFavoriteStatus);
    dispatch(favoriteChangeAction({
      id: id,
      favoriteStatus: !isFavoriteStatus ? '1' : '0',
    }));
    dispatch(replaceOffer(id));
  };

  if (redirectToLogin) {
    return <Navigate to={AppRoute.Login} />;
  }

  return (
    <button
        onClick={handleBookmark}
        className={classnames(`${pageClass}__bookmark-button`, 'button', isFavoriteStatus? pageClassActive : '')}
        type="button"
      >
        <svg 
          className={`${pageClass}__bookmark-icon`} 
          width={iconWidth}
          height={iconHeight}
        >
          <use xlinkHref="#icon-bookmark"></use>
        </svg>
        <span className="visually-hidden">{bookMarks}</span>
    </button>
  );

}

export default CardBookmark;
