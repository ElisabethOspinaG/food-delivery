import { typesCounter } from '../types/counterTypes';

export const incrementCounter = () => (
    console.log("estoy dando click al button incremento"),
    { type: typesCounter.INCREMENT_COUNTER });

export const decrementCounter = () => ({ type: typesCounter.DECREMENT_COUNTER });
console.log("estoy dando click al button decremento")

export const resetCounter = () => ({ type: typesCounter.RESET_COUNTER });



