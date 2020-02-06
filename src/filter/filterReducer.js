import FilterActionTypes from './filter.types';


const INTIIAL_STATE = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};

const filterReducer = (state = INTIIAL_STATE, action) => {
    switch (action.type) {
        case FilterActionTypes.SET_TEXT_FILTER:
            return {
                ...state,
                text: action.payload
            }
        case FilterActionTypes.SORT_BY_DATE:
            return {
                ...state,
                sortBy: 'date'
            }
        case FilterActionTypes.SORT_BY_AMOUNT:
            return {
                ...state,
                sortBy: 'amount'
            }
        case FilterActionTypes.SET_START_DATE:
            return {
                ...state,
                startDate: action.payload
            }
        case FilterActionTypes.SET_END_DATE:
            return {
                ...state,
                endDate: action.payload
            }
        default:
            return state
    }
};

export default filterReducer;