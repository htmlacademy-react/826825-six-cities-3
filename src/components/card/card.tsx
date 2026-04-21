import {Offer} from '../../types/offer';
import classnames from 'classnames';
import {Link} from 'react-router-dom';
import Rating from '../rating/rating';
import { useAppDispatch} from '../../hooks/index';
import {setMapCurrentOffer} from '../../store/main-process/main-process';
import {IMAGE_SETTINGS, PAGES} from '../../const';
import CardBookmark from './card-bookmark';

type CardProps = {
  offer: Offer;
  page: string;
}

function Card({offer, page}: CardProps) : JSX.Element {
  const {previewImage, price, isFavorite, isPremium, type, title, id, rating} = offer;
  const dispatch = useAppDispatch();

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
          <CardBookmark
            id={id}
            isFavorite={isFavorite}
          />
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
