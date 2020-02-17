import React from 'react';

import Header from './components/Header/Header.component';
import Navigation from './components/Navigation/Navigation.component';

import store from './redux/store';
import { addExpense, removeExpense, editExpense } from './expense/expense.actions';
import { setTextFilter, setSortByDate, sortByAmount, setStartDate, setEndDate } from './filter/filter.actions';
import uuid from 'uuid';

import 'normalize.css/normalize.css';
import './App.css';

class App extends React.Component {
    render() {

        store.dispatch(addExpense({
            id: uuid(),
            description: 'Water Bill',
            note: '',
            amount: 0,
            createdAt: 0
        }));

        store.dispatch(addExpense({
            id: uuid(),
            description: 'Gas Bill',
            note: '',
            amount: 0,
            createdAt: 0
        }));

        // store.dispatch(setTextFilter('water'))

        console.log(store.getState())
        return (
            <div>
                <Header title="Expensify" />
                <Navigation />
            </div>
        );
    }

}

export default App;
