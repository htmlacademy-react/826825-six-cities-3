import {Offer} from '../../types/offer';
import {useState, useEffect} from 'react';
import classnames from 'classnames';
import {Link} from 'react-router-dom';
import Rating from '../rating/rating';
import { useAppDispatch, useAppSelector } from '../../hooks/index';
import { setMapCurrentOffer, getOffer, replaceOffer } from '../../store/action';
import {favoriteChangeAction, fetchFavoriteOffersAction} from '../../store/api-actions';
import {IMAGE_SETTINGS, PAGES} from '../../const';

type CardListProps = {
  offer: Offer;
  page: string;
}

function Card({offer, page}: CardListProps) : JSX.Element {
  const {previewImage, price, isFavorite, isPremium, type, title, id, rating} = offer;
  const [isFavoriteStatus, setFavoriteStatus] = useState(isFavorite);
  // const currentOffer = useAppSelector((state) => state.currentOffer);
  // const favorite = currentOffer.id === id ? currentOffer.isFavorite : isFavorite;
  const bookMarks = isFavoriteStatus ? 'In bookmarks' : 'To bookmarks';
  const dispatch = useAppDispatch();
  // if (currentOffer.id === id) {
  //   console.log(currentOffer);
  //   console.log(isFavorite);
  // }
  // useEffect(() => {
  //   setFavoriteStatus(!isFavoriteStatus);
  // },[isFavoriteStatus]);

  const handleBookmark = () => {
    // dispatch(getOffer({}))
    setFavoriteStatus(!isFavoriteStatus);
    dispatch(favoriteChangeAction({
      id: id,
      favoriteStatus: !isFavoriteStatus ? '1' : '0',
    }));
    dispatch(replaceOffer(id));
    // dispatch(fetchFavoriteOffersAction());
  }
 
  return (
    <article
      onMouseOver = {() => dispatch(setMapCurrentOffer(id))}
      onMouseLeave = {() => dispatch(setMapCurrentOffer(''))}
      className = {`${page}__card place-card`}
    >
      {isPremium &&
      <div className="place-card__mark">
        <span>Premium</span>
      </div>}
      <div className={`${page}__image-wrapper place-card__image-wrapper`}>
        <Link to={{pathname: `/offer/${id}`}} state={offer}>
          <img
            className="place-card__image"
            src={previewImage}
            width={page === PAGES.favorites ? IMAGE_SETTINGS.favoriteWidth : IMAGE_SETTINGS.width}
            height={page === PAGES.favorites ? IMAGE_SETTINGS.favoriteHeight : IMAGE_SETTINGS.height}
            alt="Place image"
          />
        </Link>
      </div>
      <div className={classnames({'favorites__card-info': page === 'favorites'}, 'place-card__info')}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            onClick={handleBookmark}
            className={classnames('place-card__bookmark-button', 'button', {'place-card__bookmark-button--active': isFavoriteStatus})}
            type="button"
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">{bookMarks}</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <Rating
            className='place-card__stars'
            rating={rating}
          />
        </div>
        <h2 className="place-card__name">
          <Link to={{pathname: `/offer/${id}`}} state={offer}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default Card;
