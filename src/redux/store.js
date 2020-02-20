import { createStore } from 'redux';
import rootReducer from '../redux/root-reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import moment from 'moment';

const store = createStore(
    rootReducer,
    composeWithDevTools()
);

// store.subscribe(() => {
//     const state = store.getState();
//     const visibleExpenses = getVisbleExpenses(state.expenses.expenses, state.filters);
//     console.log(visibleExpenses)
// });


export const getVisbleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        const createdAtMoment = moment(expense.createdAt);
        const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true;
        const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if (sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1;
        } else if (sortBy === 'amount') {
            return a.amount < b.amount ? 1 : -1;
        }
    })
}


export default store;