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
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8
    },

    isFavorite: false,
    isPremium: false,
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
      name: 'У Черта на куличках',
      location: {
        latitude: 0,
        longitude: 0,
        zoom: 8
      }
    },

    location: {
      latitude: 0,
      longitude: 0,
      zoom: 8
    },

    isFavorite: false,
    isPremium: true,
    rating: 10,
    previewImage: '/img/room-small.jpg',
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
      name: 'Где то в горах',
      location: {
        latitude: 6,
        longitude: 4,
        zoom: 8
      }
    },

    location: {
      latitude: 6,
      longitude: 4,
      zoom: 8
    },

    isFavorite: true,
    isPremium: true,
    rating: 10,
    previewImage: '/img/room-small.jpg',
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
      name: 'Монако',
      location: {
        latitude: 43.738843,
        longitude: 7.4277062,
        zoom: 8
      }
    },

    location: {
      latitude: 43.738843,
      longitude: 7.4277062,
      zoom: 8
    },

    isFavorite: true,
    isPremium: false,
    rating: 10,
    previewImage: '/img/room-small.jpg',
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
    title: 'В тридорого',
    type: 'hotel',
    price: 123,
    city: {
      name: 'Монако',
      location: {
        latitude: 43.738843,
        longitude: 7.4277062,
        zoom: 8
      }
    },

    location: {
      latitude: 43.738843,
      longitude: 7.4277062,
      zoom: 8
    },

    isFavorite: true,
    isPremium: false,
    rating: 10,
    previewImage: '/img/room-small.jpg',
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
    id: '6',
    title: 'В тридорого',
    type: 'hotel',
    price: 123,
    city: {
      name: 'Монако',
      location: {
        latitude: 43.738843,
        longitude: 7.4277062,
        zoom: 8
      }
    },

    location: {
      latitude: 43.738843,
      longitude: 7.4277062,
      zoom: 8
    },

    isFavorite: true,
    isPremium: false,
    rating: 10,
    previewImage: '/img/room-small.jpg',
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
    id: '7',
    title: 'В тридорого',
    type: 'hotel',
    price: 123,
    city: {
      name: 'Монако',
      location: {
        latitude: 43.738843,
        longitude: 7.4277062,
        zoom: 8
      }
    },

    location: {
      latitude: 43.738843,
      longitude: 7.4277062,
      zoom: 8
    },

    isFavorite: true,
    isPremium: false,
    rating: 10,
    previewImage: '/img/room-small.jpg',
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
];
