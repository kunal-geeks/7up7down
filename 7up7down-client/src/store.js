import { configureStore, createSlice } from '@reduxjs/toolkit';

// Create a slice for the game state
const gameSlice = createSlice({
    name: 'game',
    initialState: {
        points: 5000,
    },
    reducers: {
        updatePoints: (state, action) => {
            state.points = action.payload;
        },
    },
});

// Export the action
export const { updatePoints } = gameSlice.actions;

// Create the store
const store = configureStore({
    reducer: {
        game: gameSlice.reducer,
    },
});

export default store;
