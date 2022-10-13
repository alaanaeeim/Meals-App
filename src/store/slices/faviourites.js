import {createSlice} from '@reduxjs/toolkit';

const favouriteSlice =  createSlice({
    name: 'favourites',
    initialState: {
        Ids: [],
    },
    reducers: {
        addFavourite: (state, action) => {
            state.Ids.push(action.payload.id);
        },
        removeFavourite: (state, action) => {
            state.Ids.splice(state.Ids.indexOf(action.payload.id), 1);
        }
    }
})

export const addFavourite = favouriteSlice.actions.addFavourite;
export const removeFavourite = favouriteSlice.actions.removeFavourite;

export default favouriteSlice.reducer;