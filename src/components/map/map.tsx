import {useRef, useEffect} from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from '../../hooks/use-map';
import { Offers, OfferCity, OffferLocation } from '../../types/offer';
import MarkerActive from'/img/pin-active.svg';
import MarkerDefault from '/img/pin.svg';
import {useAppSelector} from '../../hooks/index';
import {getMapCurrentOffer} from '../../store/main-process/main-selectors';

type MapProps = {
  offers: Offers;
  currentCity: OfferCity;
  mapClassName: string;
}

function Map({offers, currentCity, mapClassName}:MapProps) : JSX.Element {
  const currentOffer = useAppSelector(getMapCurrentOffer);
  const currentCityLocation:OffferLocation = currentCity.location;
  const mapRef = useRef(null);
  const map = useMap({mapRef, location: currentCityLocation});

  const defaultCustomIcon = leaflet.icon({
    iconUrl: MarkerDefault,
    iconSize: [30, 40],
    iconAnchor: [20, 40],
  });

  const currentCustomIcon = leaflet.icon({
    iconUrl: MarkerActive,
    iconSize: [30, 40],
    iconAnchor: [20, 40],
  });

  useEffect(() => {
    if (map) {
      offers.forEach((offer) => {
        leaflet
          .marker({
            lat: offer.location.latitude,
            lng: offer.location.longitude,
          }, {
            icon: (offer.id === currentOffer)
              ? currentCustomIcon
              : defaultCustomIcon,
          })
          .addTo(map);
      });
      map.setView(new leaflet.LatLng(currentCityLocation.latitude, currentCityLocation.longitude));
    }
  }, [currentCustomIcon, defaultCustomIcon, map, offers, currentOffer, currentCityLocation]);

  return (
    <section
      className={mapClassName}
      ref={mapRef}
    >
    </section>
  );
}

export default Map;
