import {
    FETCH_TODOS_LOAD,
    FETCH_TODOS,
    ADD_TODO,
    DELETE_TODO,
    TOGGLE_TODO,
} from '../actions/types';

const initialState = {
    items: [],
    isLoading: false,
};

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_TODOS_LOAD:
            return { ...state, isLoading: true };

        case FETCH_TODOS:
            return { ...state, isLoading: false, items: action.payload };

        case ADD_TODO:
            return { ...state, items: [...state.items, action.payload] };

        case DELETE_TODO:
            return {
                ...state,
                items: state.items.filter((item) => item.id !== action.payload),
            };

        case TOGGLE_TODO:
            return {
                ...state,
                items: state.items.map((item) => {
                    if (item.id === action.payload.id) {
                        return action.payload; 
                    }
                    return item;
                }),
            };

        default:
            return state;
    }
};

export default todoReducer;