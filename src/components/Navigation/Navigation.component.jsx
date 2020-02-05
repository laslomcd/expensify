import React from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';

import ExpenseDashboardPage from '../ExpenseDashboardPage/ExpenseDashboardPage.component';
import AddExpensePage from '../AddExpensePage/AddExpensePage.component';
import EditExpensePage from '../EditExpensePage/EditExpensePage.component';
import HelpPage from '../HelpPage/HelpPage.component';
import ErrorPage from '../ErrorPage/ErrorPage.component';

import './Navigation.scss'

const Navigation = () => (
    <div>
        <ul className="navbar">
            <li><NavLink to="/" activeClassName="is-active" exact>Home</NavLink></li>
            <li><NavLink to="/create" activeClassName="is-active">Create Expense</NavLink></li>
            <li><NavLink to="/help" activeClassName="is-active">Help</NavLink></li>
        </ul>
        <Switch>
            <Route path="/" component={ExpenseDashboardPage} exact />
            <Route path="/create" component={AddExpensePage} />
            <Route path="/edit/:id" component={EditExpensePage} />
            <Route path="/help" component={HelpPage} />
            <Route component={ErrorPage} />
        </Switch>
    </div>
);

export default Navigation;