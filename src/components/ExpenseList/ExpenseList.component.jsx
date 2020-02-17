import React from 'react';
import { connect } from 'react-redux';

const ExpenseList = (expenses) => (
    <div>
        <h1>Expense List</h1>
        {
            expenses.expenses.map(expense => (
                <p>{expense.id}</p>
            ))

        }
    </div>
);

const mapStateToProps = state => ({
    expenses: state.expenses.expenses
})

export default connect(mapStateToProps)(ExpenseList);