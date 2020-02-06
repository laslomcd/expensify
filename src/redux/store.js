import { createStore } from 'redux';
import rootReducer from '../redux/root-reducer';
import uuid from 'uuid';

import { addExpense, removeExpense, editExpense } from '../expense/expense.actions';
import { setTextFilter, setSortByDate, sortByAmount } from '../filter/filter.actions';

const store = createStore(rootReducer);

store.subscribe(() => {
    console.log(store.getState())
})


const expenseOne = store.dispatch(addExpense({
    id: uuid(),
    description: 'rent',
    note: '',
    amount: 100,
    createdAt: 0
}));

const expenseTwo = store.dispatch(addExpense({
    id: uuid(),
    description: 'car',
    note: '',
    amount: 2500,
    createdAt: 0
}));

store.dispatch(removeExpense({
    id: expenseOne.payload.id
}));

store.dispatch(editExpense({
    id: expenseTwo.payload.id,
    amount: 50
}));

store.dispatch(setTextFilter('rent'))
store.dispatch(setSortByDate())
store.dispatch(sortByAmount())

console.log(store.getState());

export default store;