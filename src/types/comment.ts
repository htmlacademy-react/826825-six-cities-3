import {User} from './offer';

export type Review = {
  review: string;
  rating: string;
}

export type Comment = {
  id: string;
  date: string;
  user: User;
  comment: string;
  rating: number;
}


export type Comments = Comment[];
