import React from 'react';
import { connect } from 'react-redux';

import { setTextFilter } from '../../filter/filter.actions';

const ExpenseListFilters = (props) => (
    <div>
        <input type="text" value={props.filters.text} onChange={e => props.setFilter(e)} />
    </div>
);

const mapStateToProps = state => ({
    filters: state.filters
});

const mapDispatchToProps = dispatch => ({
    setFilter: event => dispatch(setTextFilter(event.target.value))
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);