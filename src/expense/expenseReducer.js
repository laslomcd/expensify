import ExpenseActionTypes from './expense.types';

const INITIAL_STATE = {
    expenses: [],
};

const expenseReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ExpenseActionTypes.ADD_EXPENSE:
            return {
                ...state,
                expenses: state.expenses.concat(action.payload)
            }
        case ExpenseActionTypes.EDIT_EXPENSE:
            return {
                ...state,
                expenses: state.expenses.map(expense => expense.id === action.payload.id ? { ...expense, amount: action.payload.amount } : expense)
            }
        case ExpenseActionTypes.REMOVE_EXPENSE:
            return {
                ...state,
                expenses: state.expenses.filter(expense => expense.id !== action.payload.id)
            }
        default:
            return state;
    }
};

export default expenseReducer;