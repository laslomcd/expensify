import React from 'react';
import store from '../redux/store';
import { incrementCount, decrementCount, resetCount, setCount } from './count.actions';

store.subscribe(() => {
    console.log(store.getState())
});
// Increment Count

store.dispatch(incrementCount())
store.dispatch(incrementCount(88))
store.dispatch(decrementCount(247))
store.dispatch(resetCount())
store.dispatch(setCount(150))


class Redux101 extends React.Component {
    render() {
        return (
            <div>
                redux 101
            </div>
        )
    }
}

export default Redux101;
