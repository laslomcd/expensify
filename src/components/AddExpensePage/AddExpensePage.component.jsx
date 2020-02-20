import React from 'react';
import { connect } from 'react-redux';
import { addExpense } from '../../expense/expense.actions';

import ExpenseForm from '../ExpenseForm/ExpenseForm.component';

const AddExpensePage = (props) => (
    <div>
        <h1>Add Expense</h1>
        <ExpenseForm
            onSubmit={(expense) => {
                props.addNewExpense(expense)
                props.history.push('/')
            }}
        />
    </div>
);

const mapDispatchToProps = dispatch => ({
    addNewExpense: expense => dispatch(addExpense(expense))
});

export default connect(null, mapDispatchToProps)(AddExpensePage);