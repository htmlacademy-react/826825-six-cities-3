import {Offers} from '../types/offer';

export const offers: Offers = [
  {
    id: '1',
    title: 'Beautiful & luxurious studio at great location',
    type: 'apartment',
    price: 120,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.35514938496378,
        longitude: 4.673877537499948,
        zoom: 8
      }
    },

    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 8
    },

    isFavorite: false,
    isPremium: true,
    rating: 4,
    previewImage: '/img/apartment-01.jpg',
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    bedrooms: 3,
    goods: [
      'Heating', 'Cable TV', 'Washing machine'
    ],
    host: {
      name: 'Angelina',
      avatarUrl: '/img/avatar-angelina.jpg',
      isPro: false
    },
    images: [
      '/img/apartment-01.jpg', '/img/apartment-02.jpg', '/img/apartment-03.jpg'
    ],
    maxAdults: 4
  },

  {
    id: '2',
    title: 'Маленькая комната',
    type: 'room',
    price: 12000,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.35514938496378,
        longitude: 4.673877537499948,
        zoom: 8
      }
    },

    location: {
      latitude: 52.3609553943508,
      longitude: 4.85309666406198,
      zoom: 8
    },

    isFavorite: false,
    isPremium: true,
    rating: 2,
    previewImage: '/img/room.jpg',
    description: 'И так сойдет',
    bedrooms: 3,
    goods: [
      'Heating', 'Cable TV', 'Washing machine', 'шумные соседи', 'поболтать по душам'
    ],
    host: {
      name: 'Angelina',
      avatarUrl: '/img/avatar-angelina.jpg',
      isPro: false
    },
    images: [
      '/img/room.jpg', '/img/room.jpg', '/img/room.jpg'
    ],
    maxAdults: 10
  },
  {
    id: '3',
    title: 'На пике...',
    type: 'house',
    price: 99,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.35514938496378,
        longitude: 4.673877537499948,
        zoom: 8
      }
    },

    location: {
      latitude: 52.3909553943508,
      longitude: 4.929309666406198,
      zoom: 8
    },

    isFavorite: true,
    isPremium: true,
    rating: 3,
    previewImage: '/img/room.jpg',
    description: 'бывало и хуже',
    bedrooms: 3,
    goods: [
      'Heating', 'Cable TV', 'Washing machine', 'тишина', 'волки'
    ],
    host: {
      name: 'MAX',
      avatarUrl: '/img/avatar-max.jpg',
      isPro: false
    },
    images: [
      '/img/room.jpg', '/img/room.jpg', '/img/room.jpg'
    ],
    maxAdults: 1
  },
  {
    id: '4',
    title: 'В тридорого',
    type: 'hotel',
    price: 123,
    city: {
      name: 'Paris',
      location: {
        latitude: 52.35514938496378,
        longitude: 4.673877537499948,
        zoom: 8
      }
    },

    location: {
      latitude: 48.873799,
      longitude: 2.295117,
      zoom: 8
    },

    isFavorite: true,
    isPremium: false,
    rating: 4,
    previewImage: '/img/room.jpg',
    description: 'Хороший понт дороже денег',
    bedrooms: 3,
    goods: [
      'Heating', 'Cable TV', 'Washing machine', 'casino'
    ],
    host: {
      name: 'MAX',
      avatarUrl: '/img/avatar-max.jpg',
      isPro: false
    },
    images: [
      '/img/room.jpg'
    ],
    maxAdults: 12
  },
  {
    id: '5',
    title: 'Маленькая комната',
    type: 'room',
    price: 12000,
    city: {
      name: 'Paris',
      location: {
        latitude: 52.35514938496378,
        longitude: 4.673877537499948,
        zoom: 8
      }
    },

    location: {
      latitude: 48.869388,
      longitude: 2.308625,
      zoom: 8
    },

    isFavorite: false,
    isPremium: true,
    rating: 2,
    previewImage: '/img/room.jpg',
    description: 'И так сойдет',
    bedrooms: 3,
    goods: [
      'Heating', 'Cable TV', 'Washing machine', 'шумные соседи', 'поболтать по душам'
    ],
    host: {
      name: 'Angelina',
      avatarUrl: '/img/avatar-angelina.jpg',
      isPro: false
    },
    images: [
      '/img/room.jpg', '/img/room.jpg', '/img/room.jpg'
    ],
    maxAdults: 10
  }
];
