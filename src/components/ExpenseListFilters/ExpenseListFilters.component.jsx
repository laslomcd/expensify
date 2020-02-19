import React from 'react';
import { connect } from 'react-redux';

import { setTextFilter, sortByAmount, sortByDate } from '../../filter/filter.actions';

const ExpenseListFilters = (props) => (
    <div>
        <input type="text" value={props.filters.text} onChange={e => props.setFilter(e)} />
        <select value={props.filters.sortBy} onChange={() => {
            if (props.filters.sortBy === 'date' ? props.setSortAmount() : props.setSortDate());
        }}>
            <option value="date">Date</option>
            <option value="amount">Amount</option>
        </select>
    </div>
);

const mapStateToProps = state => ({
    filters: state.filters
});

const mapDispatchToProps = dispatch => ({
    setFilter: event => dispatch(setTextFilter(event.target.value)),
    setSortAmount: () => dispatch(sortByAmount()),
    setSortDate: () => dispatch(sortByDate()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);