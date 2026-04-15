import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../const';
import { ReviewsData } from '../../types/state';
import { fetchReviewsAction, reviewAction } from '../api-actions';

const initialState: ReviewsData = {
    reviews: [],
};

export const reviewsData = createSlice({
    name: NameSpace.Review,
    initialState,
    reducers: {},
    extraReducers(builder) {
      builder
        .addCase(fetchReviewsAction.fulfilled, (state, action) => {
            state.reviews = action.payload;
        })

        .addCase(reviewAction.fulfilled, (state, action) => {
            state.reviews.push(action.payload);
        });
    }
  });
