import {typesCounter} from '../types/counterTypes';

const initialState = 1;

export const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case typesCounter.INCREMENT_COUNTER:
            return state + 1;
            
        case typesCounter.DECREMENT_COUNTER:
            return state>1 ? state - 1 : state = 1;

        case typesCounter.RESET_COUNTER:
            return initialState;

        default:
            return state;
    }
};

