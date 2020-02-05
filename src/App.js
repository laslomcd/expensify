import React from 'react';

import Header from './components/Header/Header.component';
import Navigation from './components/Navigation/Navigation.component';


import 'normalize.css/normalize.css';
import './App.css';

class App extends React.Component {
    render() {
        return (
            <div>
                <Header title="Expensify" />
                <Navigation />
            </div>
        );
    }

}

export default App;
