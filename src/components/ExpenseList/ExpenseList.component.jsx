import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from '../ExpenseListItem/ExpenseListItem.component';
import { getVisbleExpenses } from '../../redux/store';

const ExpenseList = (expenses) => (
    <div>
        <h1>Expense List</h1>
        {
            expenses.expenses.map(expense => (
                <ExpenseListItem expense={expense} key={expense.id} />
            ))
        }

    </div>
);

const mapStateToProps = state => ({
    expenses: getVisbleExpenses(state.expenses.expenses, state.filters)
})

export default connect(mapStateToProps)(ExpenseList);