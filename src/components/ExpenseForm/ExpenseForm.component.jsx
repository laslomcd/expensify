import React from 'react';
import moment from 'moment';

class ExpenseForm extends React.Component {
    state = {
        description: '',
        note: '',
        amount: ''
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

    render() {
        return (
            <div>
                <form action="">
                    <input type="text" placeholder="Description" autoFocus value={this.state.description} onChange={this.onDescriptionChange} />
                    <input type="text" placeholder="Amount" value={this.state.amount} onChange={this.onAmountChange} />
                    <input type="text" placeholder="Note" value={this.state.note} onChange={this.onNoteChange} />
                    <textarea name="" id="" cols="30" rows="10" placeholder="Add a note for your expense (optional)"></textarea>
                    <button>Add Expense</button>
                </form>
            </div>
        )
    }
}

export default ExpenseForm;