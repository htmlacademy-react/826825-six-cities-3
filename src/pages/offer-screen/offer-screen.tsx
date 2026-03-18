import {useEffect} from 'react';
import {Helmet} from 'react-helmet-async';
import {useParams} from 'react-router-dom';
import {Comments} from '../../types/comment';
import {Offers} from '../../types/offer';
import {Review} from '../../types/comment';
import {PAGES} from '../../const';
import CardsList from '../../components/cards-list/cards-list';
import Rating from '../../components/rating/rating';
import Map from '../../components/map/map';
import OfferReviewsList from '../../components/offer/offer-reviews-list';
import OfferFormReview from '../../components/offer/offer-form-review';
import LoadingScreen from '../loading-screen/loading-screen';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import {fetchOfferAction, fetchReviewsAction, fetchNearByOfferAction} from '../../store/api-actions';
import {useAppDispatch, useAppSelector} from '../../hooks';

type OfferScreenProps = {
  comments: Comments;
  offers: Offers;
  onComment: (formData:Review) => void;
}

const offersListClassName: string = 'near-places__list places__list';

function OfferScreen({onComment} : OfferScreenProps): JSX.Element {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const isOffersDataLoading = useAppSelector((state) => state.isOffersDataLoading);
  const selectedOffer = useAppSelector((state) => state.currentOffer);
  const comments = useAppSelector((state) => state.reviews);
  const nearOffers = useAppSelector((state) => state.nearByOffer);
  
  useEffect(() => {
    
    if (id !== selectedOffer?.id) {
      dispatch(fetchOfferAction(id));
      dispatch(fetchReviewsAction(id));
      dispatch(fetchNearByOfferAction(id));
    }
  },[id]);

  if (!selectedOffer.id) {
    return <NotFoundScreen />;
  }

  if (isOffersDataLoading) {
    return (
      <LoadingScreen />
    );
  }

  const {images, isPremium, title, maxAdults, bedrooms, type, rating, price, goods, host, description, city} = selectedOffer;

  return (
    <div className="page">
      <Helmet>
        <title>6 cities: offer</title>
      </Helmet>
      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <div className="offer__gallery">
              {images.map((imageUrl, index) => (
                <div className="offer__image-wrapper"
                  key={`${index + imageUrl}`}
                >
                  <img
                    className="offer__image"
                    src={imageUrl}
                    alt="Photo studio"
                  />
                </div>)
              )}
            </div>
          </div>
          <div className="offer__container container">
            <div className="offer__wrapper">
              {isPremium &&
                <div className="offer__mark">
                  <span>Premium</span>
                </div>}
              <div className="offer__name-wrapper">
                <h1 className="offer__name">
                  {title}
                </h1>
                <button className="offer__bookmark-button button" type="button">
                  <svg className="offer__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="offer__rating rating">
                <Rating
                  className='offer__stars'
                  rating={rating}
                />
                <span className="offer__rating-value rating__value">{rating}</span>
              </div>
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">
                  {type}
                </li>
                <li className="offer__feature offer__feature--bedrooms">
                  {bedrooms} Bedrooms
                </li>
                <li className="offer__feature offer__feature--adults">
                  Max {maxAdults} adults
                </li>
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">&euro;{price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <div className="offer__inside">
                <h2 className="offer__inside-title">What&apos;s inside</h2>
                <ul className="offer__inside-list">
                  {goods.map((good, index) => (
                    <li className="offer__inside-item" key={`${index + good}`}>
                      {good}
                    </li>)
                  )}
                </ul>
              </div>
              <div className="offer__host">
                <h2 className="offer__host-title">Meet the host</h2>
                <div className="offer__host-user user">
                  <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="offer__avatar user__avatar"
                      src={host.avatarUrl}
                      width="74"
                      height="74"
                      alt="Host avatar"
                    />
                  </div>
                  <span className="offer__user-name">
                    {host.name}
                  </span>
                  <span className="offer__user-status">
                    {host.isPro && 'Pro'}
                  </span>
                </div>
                <div className="offer__description">
                  <p className="offer__text">
                    {description}
                  </p>
                  <p className="offer__text">
                    An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.
                  </p>
                </div>
              </div>
              <section className="offer__reviews reviews">
                <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{comments.length}</span></h2>
                <OfferReviewsList comments={comments} />
                <OfferFormReview onComment={onComment}/>
              </section>
            </div>
          </div>
          <Map
            offers={nearOffers}
            currentCity={city}
            mapClassName='offer__map map'
          />
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <CardsList
              listClassName={offersListClassName}
              offers={nearOffers}
              page={PAGES.offer}
            />
          </section>
        </div>
      </main>
    </div>
  );
}

export default OfferScreen;
