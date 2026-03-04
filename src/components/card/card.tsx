import {Offer} from '../../types/offer';
import classnames from 'classnames';
import {Link} from 'react-router-dom';
import Rating from '../rating/rating';

type CardListProps = {
  offer: Offer;
  articleClassName: string;
  imageWrapperClassName: string;
  imgHeight: string;
  imgWidth: string;
  setCurrentOffer?: (value: string) => void;
}

function Card({offer, articleClassName, imageWrapperClassName, setCurrentOffer, imgWidth, imgHeight}: CardListProps) : JSX.Element {
  const {previewImage, price, isFavorite, isPremium, type, title, id, rating} = offer;
  const bookMarks = isFavorite ? 'In bookmarks' : 'To bookmarks';

  return (
    <article
      onMouseOver = {() => setCurrentOffer?.(id)}
      onMouseLeave = {() => setCurrentOffer?.('')}
      className={classnames(articleClassName,'place-card')}
    >
      {isPremium &&
      <div className="place-card__mark">
        <span>Premium</span>
      </div>}
      <div className={classnames(imageWrapperClassName,'place-card__image-wrapper')}>
        <Link to={{pathname: `/offer/${id}`}} state={offer}>
          <img
            className="place-card__image"
            src={previewImage}
            width={imgWidth}
            height={imgHeight}
            alt="Place image"
          />
        </Link>
      </div>
      <div className={classnames({'favorites__card-info':location.pathname === '/favorites'}, 'place-card__info')}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            className={classnames('place-card__bookmark-button', 'button', {'place-card__bookmark-button--active': isFavorite})}
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
