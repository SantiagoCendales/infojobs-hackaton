import { createSlice } from '@reduxjs/toolkit';

export const mainSlice = createSlice({
    name: 'main',
    initialState: {
        offers: [],
    },
    reducers: {
        setOffers: (state, action) => {
            state.offers = action.payload
        },
    }
});

// Action creators are generated for each case reducer function
export const {
    setOffers
} = mainSlice.actions;