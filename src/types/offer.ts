export type OfferType = 'apartment' | 'room' | 'house' | 'hotel';
export type OffferLocation = {
  latitude: number;
  longitude: number;
  zoom: number;
}

export type OfferCity = {
  name: string;
  location: OffferLocation;
};

export type User = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
}


export type Offer = {
  id: string;
  title: string;
  type: OfferType;
  price: number;
  city: OfferCity;
  location: OffferLocation;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  previewImage: string;
  description: string;
  bedrooms: number;
  goods: string[];
  host: User;
  images: string[];
  maxAdults: number;
};

export type Offers = Offer[];
