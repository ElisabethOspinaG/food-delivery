import { restaurantsTypes } from "../types/restaurantsTypes";

const initialState = {
    restaurants: [],
}

const restaurantReducer = (state = initialState, action) =>{
    switch (action.type) {
        case restaurantsTypes.RESTAURANTS_GET:
            return {
                ...state,
                restaurants: action.payload.restaurants,
            };
        case restaurantsTypes.RESTAURANTS_ADD:
            return {
                ...state,
                restaurants: [...state.payload, action.payload],
            };
        case restaurantsTypes.RESTAURANTS_FILTERED:
            return {
                ...state,
                restaurants: action.payload.restaurants,
            };
        default:
            return state;
    }
}

export default restaurantReducer

