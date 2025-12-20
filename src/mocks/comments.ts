import {Comments} from '../types/comment';

const AVATAR_URL = 'https://i.pravatar.cc/128';

export const comments: Comments = [
  {
    id: '1',
    date: '2019-05-08T14:13:56.569Z',
    user: {
      name: 'Oliver Conner',
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      isPro: false
    },
    comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    rating: 4
  },

  {
    id: '2',
    date: '2019-05-08T14:13:56.569Z',
    user: {
      name: 'Костян белый',
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      isPro: false
    },
    comment: 'Крысы везде, в кровате, в туалете, в ванной, на рецепшене...',
    rating: 1
  },

  {
    id: '3',
    date: '2019-05-08T14:13:56.569Z',
    user: {
      name: 'Пендаль Серый',
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      isPro: false
    },
    comment: 'Было холодно',
    rating: 2
  },

  {
    id: '4',
    date: '2019-05-08T14:13:56.569Z',
    user: {
      name: 'Лысый',
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      isPro: false
    },
    comment: 'Респект Ребятам',
    rating: 3
  },

  {
    id: '5',
    date: '2019-05-08T14:13:56.569Z',
    user: {
      name: 'Длинный',
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      isPro: false
    },
    comment: 'Местечко зачет',
    rating: 5
  },
];
