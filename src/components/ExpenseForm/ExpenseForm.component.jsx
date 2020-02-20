import React from 'react';
import moment from 'moment';
import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

const now = moment();
console.log(now.format('MMM Do YYYY'))

class ExpenseForm extends React.Component {
    state = {
        description: '',
        note: '',
        amount: '',
        createdAt: moment(),
        calendarFocused: false
    };

    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState({ description: description })
    }

    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState({ note: note })
    }

    onAmountChange = (e) => {
        const amount = e.target.value;
        if (amount.match(/^\d*(\.\d{0,2})?$/)) {
            this.setState({ amount: amount })
        }
    }

    onDateChange = (createdAt) => {
        this.setState({ createdAt: createdAt })
    }

    onFocusChange = ({ focused }) => {
        this.setState({ calendarFocused: focused })
    }

    render() {
        return (
            <div>
                <form action="">
                    <input 
                    type="text" 
                    placeholder="Description" 
                    autoFocus value={this.state.description} 
                    onChange={this.onDescriptionChange} />

                    <input 
                    type="text" 
                    placeholder="Amount" 
                    value={this.state.amount} 
                    onChange={this.onAmountChange} />

                    <input 
                    type="text" 
                    placeholder="Note" 
                    value={this.state.note} 
                    onChange={this.onNoteChange} />

                    <SingleDatePicker 
                    date={this.state.createdAt} 
                    onDateChange={this.onDateChange} 
                    focused={this.state.calendarFocused} 
                    onFocusChange={this.onFocusChange} 
                    numberOfMonths={1} 
                    isOutsideRange={() => false } />

                    <textarea 
                    name="" id="" 
                    cols="30" 
                    rows="10" 
                    placeholder="Add a note for your expense (optional)"></textarea>
                    
                    <button>Add Expense</button>
                </form>
            </div>
        )
    }
}

export default ExpenseForm;

