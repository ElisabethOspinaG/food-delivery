import { typesCounter } from '../types/counterTypes';

export const incrementCounter = () => {

    return {
      type: typesCounter.INCREMENT_COUNTER,
      payload: null
    }
   
}

export const decrementCounter = () => {
    
    return {
        type: typesCounter.DECREMENT_COUNTER,
        payload: null
    }
}

export const resetCounter = () => {
   
    return {
        type: typesCounter.RESET_COUNTER,
        payload: null
    }

}



