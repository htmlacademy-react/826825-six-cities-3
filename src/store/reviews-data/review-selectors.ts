import {NameSpace} from '../../const';
import {State} from '../../types/state';
import { Comments } from '../../types/comment';

export const getReviews = (state: State): Comments => state[NameSpace.Review].reviews;
