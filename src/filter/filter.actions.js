import FilterActionTypes from './filter.types';

export const setTextFilter = (filterText) => ({
    type: FilterActionTypes.SET_TEXT_FILTER,
    payload: filterText
});

export const setSortByDate = () => ({
    type: FilterActionTypes.SORT_BY_DATE,
});

export const sortByAmount = () => ({
    type: FilterActionTypes.SORT_BY_AMOUNT,
});

export const setStartDate = (startDate) => ({
    type: FilterActionTypes.SET_START_DATE,
    payload: startDate
});

export const setEndDate = (endDate) => ({
    type: FilterActionTypes.SET_END_DATE,
    payload: endDate
});