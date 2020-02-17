import React from 'react';
import ExpenseList from '../ExpenseList/ExpenseList.component';
import ExpenseListFilters from '../ExpenseListFilters/ExpenseListFilters.component';

const ExpenseDashboardPage = () => (
    <div>
        <ExpenseListFilters />
        <ExpenseList />
    </div>
);

export default ExpenseDashboardPage;