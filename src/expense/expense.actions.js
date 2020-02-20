import ExpenseActionTypes from './expense.types';


export const addExpense = (expense) => ({
    type: ExpenseActionTypes.ADD_EXPENSE,
    payload: expense
});

export const removeExpense = (expense) => ({
    type: ExpenseActionTypes.REMOVE_EXPENSE,
    payload: expense
});

export const editExpense = (expense) => ({
    type: ExpenseActionTypes.EDIT_EXPENSE,
    payload: expense
});