import { combineReducers } from 'redux';
import expenseReducer from '../expense/expenseReducer';
import filterReducer from '../filter/filterReducer';

const rootReducer = combineReducers({
    expenses: expenseReducer,
    filters: filterReducer
});

export default rootReducer;