import { User } from './offer';

export type Review = {
  id: string;
  comment: string;
  rating: number;
}

export type Comment = {
  id: string;
  date: string;
  user: User;
  // comment: string;
  rating: number;
}


export type Comments = Comment[];
