import {Link} from 'react-router-dom';
import {IMAGE_SETTINGS} from '../../const';
import {Offer} from '../../types/offer';

type CardImgProps = {
  offer: Offer;
  bemBlock: string;
}

function CardImg({offer, bemBlock}: CardImgProps) : JSX.Element {
  const {previewImage, id} = offer
  return (
    <div className={`${bemBlock}__image-wrapper place-card__image-wrapper`}>
      <Link to={{pathname: `/offer/${id}`}} state={offer}>
      <img
          className="place-card__image"
          src={previewImage}
          width={bemBlock === 'favorites' ? IMAGE_SETTINGS.favoriteWidth : IMAGE_SETTINGS.width}
          height={bemBlock === 'favorites' ? IMAGE_SETTINGS.favoriteHeight : IMAGE_SETTINGS.height}
          alt="Place image"
      />
      </Link>
    </div>
  );
}
  
  export default CardImg;
