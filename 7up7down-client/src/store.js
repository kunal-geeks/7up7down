import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialState = {
    points: 5000,
};

const gameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {
        updatePoints: (state, action) => {
            state.points = action.payload;
        },
    },
});

export const { updatePoints } = gameSlice.actions;

const store = configureStore({
    reducer: {
        game: gameSlice.reducer,
    },
});

export default store;
