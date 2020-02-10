import { createStore } from 'redux';
import rootReducer from '../redux/root-reducer';
import uuid from 'uuid';

import { addExpense, removeExpense, editExpense } from '../expense/expense.actions';
import { setTextFilter, setSortByDate, sortByAmount, setStartDate, setEndDate } from '../filter/filter.actions';

const store = createStore(rootReducer);

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisbleExpenses(state.expenses.expenses, state.filters);
    console.log(visibleExpenses)
})

const getVisbleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
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


const expenseOne = store.dispatch(addExpense({
    id: uuid(),
    description: 'rent',
    note: '',
    amount: 100,
    createdAt: -1000
}));

const expenseTwo = store.dispatch(addExpense({
    id: uuid(),
    description: 'car',
    note: '',
    amount: 2500,
    createdAt: 1000
}));

// store.dispatch(removeExpense({
//     id: expenseOne.payload.id
// }));

// store.dispatch(editExpense({
//     id: expenseTwo.payload.id,
//     amount: 50
// }));

// store.dispatch(setTextFilter('r'))
// store.dispatch(setSortByDate())
store.dispatch(sortByAmount())

// store.dispatch(setStartDate(0))
// store.dispatch(setEndDate(1250))

export default store;