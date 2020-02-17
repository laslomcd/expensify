import React from 'react';
import { connect } from 'react-redux';
import { removeExpense } from '../../expense/expense.actions';

const ExpenseListItem = (expense) => (
    <div>
        {
            <table>
                <tbody>
                    <tr>
                        <th style={{ width: "10%" }}><strong>Description</strong></th>
                        <th style={{ width: "20%" }}><strong>ID</strong></th>
                        <th style={{ width: "20%" }}><strong>Note</strong></th>
                        <th style={{ width: "10%" }}><strong>Amount</strong></th>
                        <th style={{ width: "20%" }}><strong>Created At</strong></th>
                        <th style={{ width: "20%" }}><button onClick={() => expense.removeExpense(expense.expense.id)}>Remove</button></th>
                    </tr>
                    <tr>
                        <td><strong>{expense.expense.description}</strong></td>
                        <td>{expense.expense.id}</td>
                        <td>{expense.expense.note}</td>
                        <td>{expense.expense.amount}</td>
                        <td>{expense.expense.createdAt}</td>
                    </tr>
                </tbody>
            </table>
        }
    </div>

);

const mapDispatchToProps = dispatch => ({
    removeExpense: id => dispatch(removeExpense({ id }))
});

export default connect(null, mapDispatchToProps)(ExpenseListItem);
