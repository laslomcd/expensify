import ExpenseActionTypes from './expense.types';


export const addExpense = (expense) => ({
    type: ExpenseActionTypes.ADD_EXPENSE,
    payload: expense
});

export const removeExpense = (expenseId) => ({
    type: ExpenseActionTypes.REMOVE_EXPENSE,
    payload: expenseId
});

export const editExpense = (expenseId) => ({
    type: ExpenseActionTypes.EDIT_EXPENSE,
    payload: expenseId
});