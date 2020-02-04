import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ExpenseDashboardPage from './components/ExpenseDashboardPage/ExpenseDashboardPage.component';
import AddExpensePage from './components/ExpenseDashboardPage/ExpenseDashboardPage.component';


import 'normalize.css/normalize.css';
import './App.css';

class App extends React.Component {


    render() {
        return (
            <Switch>
                <div>
                    <Route path="/" component={ExpenseDashboardPage} />
                    <Route path="/create" component={AddExpensePage} />
                </div>
            </Switch>
        );
    }

}

export default App;
