// src/store.js
import { createStore } from 'redux';

const initialState = {
    points: 5000
};

function gameReducer(state = initialState, action) {
    switch (action.type) {
        case 'UPDATE_POINTS':
            return {
                ...state,
                points: action.payload
            };
        default:
            return state;
    }
}

const store = createStore(gameReducer);
export default store;
