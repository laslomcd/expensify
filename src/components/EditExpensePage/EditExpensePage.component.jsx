import React from 'react'
import { connect } from 'react-redux';
import { editExpense, removeExpense } from '../../expense/expense.actions';

import ExpenseForm from '../ExpenseForm/ExpenseForm.component';

const EditExpensePage = (props) => {
    return (
        <div>
            <ExpenseForm
                expense={props.expense}
                onSubmit={(expense) => {
                    props.editExpense(expense)
                    props.history.push('/')
                }} />
            <button onClick={() => {
                props.removeExpense(props.expense)
                props.history.push('/')
            }}>Delete Expense</button>
        </div>
    );
}

const mapStateToProps = (state, props) => ({
    expense: state.expenses.expenses.find(expense => expense.id === props.match.params.id)
})

const mapDispatchToProps = dispatch => ({
    editExpense: expense => dispatch(editExpense(expense)),
    removeExpense: expense => dispatch(removeExpense(expense))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);
