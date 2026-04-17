import {NameSpace} from '../../const';
import {State} from '../../types/state';
import { OfferCity } from '../../types/offer';

export const getCurrentCity = (state: State): OfferCity => state[NameSpace.Main].currentCity;
export const getSortType = (state: State): OfferCity => state[NameSpace.Main].sortType;
export const getMapCurrentOffer = (state: State): string => state[NameSpace.Main].mapCurrentOffer;
