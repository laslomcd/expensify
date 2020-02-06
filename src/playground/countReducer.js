import CountActionTypes from './count.types';

const INITIAL_STATE = {
    count: 0
}

const countReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CountActionTypes.INCREMENT:
            return {
                count: state.count + action.payload
            }
        case CountActionTypes.DECREMENT:
            return {
                count: state.count - action.payload
            }
        case CountActionTypes.RESET:
            return {
                count: 0
            }
        case CountActionTypes.SET:
            return {
                count: action.payload
            }
        default:
            return state;
    }
};

export default countReducer;