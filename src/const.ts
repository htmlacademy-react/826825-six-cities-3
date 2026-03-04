export const Setting = {
  placeCount: 312,
  maxRating: 5,
  ratingWidthModifier: 20,
};

export enum AppRoute {
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer/:id',
  Main = '/'
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
