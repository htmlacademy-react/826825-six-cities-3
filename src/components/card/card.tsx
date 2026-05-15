import {Offer} from '../../types/offer';
import {useCallback} from 'react';
import classnames from 'classnames';
import Rating from '../rating/rating';
import { useAppDispatch} from '../../hooks/index';
import {setMapCurrentOffer} from '../../store/main-process/main-process';
import {BemBlocks} from '../../const';
import CardBookmark from './card-bookmark';
import CardImg from './card-img';
import CardTitle from './card-title';

type CardProps = {
  offer: Offer;
  bemBlock: string | undefined;
}

function Card({offer, bemBlock}: CardProps) : JSX.Element {
  const {price, isFavorite, isPremium, type, id, rating} = offer;
  const dispatch = useAppDispatch();

  const onCardHover = useCallback((offerId: string) => () => dispatch(setMapCurrentOffer(offerId)),[dispatch]);

  return (
    <article
      onMouseOver = {onCardHover(id)}
      onMouseLeave = {onCardHover('')}
      className = {`${bemBlock}__card place-card`}
    >
      {isPremium &&
      <div className="place-card__mark">
        <span>Premium</span>
      </div>}
      <CardImg
        offer = {offer}
        bemBlock = {bemBlock}
      />
      <div className={classnames({'favorites__card-info': bemBlock === 'favorites'}, 'place-card__info')}>
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
            bemBlock={BemBlocks.PlaceCard}
            rating={rating}
          />
        </div>
        <CardTitle
          offer={offer}
        />
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default Card;
