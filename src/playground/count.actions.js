import CountActionTypes from './count.types';

export const incrementCount = (value) => ({
    type: CountActionTypes.INCREMENT,
    payload: typeof value === 'number' ? value : 1
});

export const decrementCount = (value) => ({
    type: CountActionTypes.DECREMENT,
    payload: typeof value === 'number' ? value : 1
});

export const resetCount = () => ({
    type: CountActionTypes.RESET
});

export const setCount = (value) => ({
    type: CountActionTypes.SET,
    payload: value
});