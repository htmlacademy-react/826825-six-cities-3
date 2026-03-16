import { OfferCity } from './types/offer';

export const Setting = {
  maxRating: 5,
  ratingWidthModifier: 20,
  maxNearOfferCount: 3,
};

export const TIMEOUT_SHOW_ERROR:number = 2000;

export const IMAGE_SETTINGS = {
  width: 260,
  height: 200,
  favoriteWidth: 150,
  favoriteHeight: 110
};

export enum AppRoute {
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer/:id',
  Main = '/'
}

export enum APIRoute {
  Offers = '/offers',
  Login = '/login',
  Logout = '/logout',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum DateFormat {
  Human = 'MMMM yyyy',
  Data = 'yyyy-MM-dd',
}


export const PAGES = {
  main: 'cities',
  favorites: 'favorites',
  offer: 'near-places'
};

export enum SortTypes {
  POPULAR = 'Popular',
  PRICE_LOW_TO_HIGH = 'Price: low to high',
  PRICE_HIGH_TO_LOW = 'Price: high to low',
  TOP_RATED_FIRST = 'Top rated first',
}

export const CITIES: OfferCity[] = [
  {
    name: 'Paris',
    location: {
      latitude: 48.8566,
      longitude:  2.3522,
      zoom: 12,
    },
  },
  {
    name: 'Cologne',
    location: {
      latitude: 50.9375,
      longitude: 6.9603,
      zoom: 12,
    },
  },
  {
    name: 'Brussels',
    location: {
      latitude: 50.8503,
      longitude: 4.3517,
      zoom: 12,
    }
  },
  {
    name: 'Amsterdam',
    location: {
      latitude: 52.374,
      longitude: 4.88969,
      zoom: 12,
    },
  },
  {
    name: 'Hamburg',
    location: {
      latitude: 53.5511,
      longitude: 9.9937,
      zoom: 12,
    }
  },
  {
    name: 'Dusseldorf',
    location: {
      latitude: 51.2260,
      longitude: 6.7762,
      zoom: 12,
    }
  }
];
