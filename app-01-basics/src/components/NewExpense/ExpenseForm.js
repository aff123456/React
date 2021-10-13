import './ExpenseForm.css';
import { useState } from 'react';

const ExpenseForm = props => {

    const [enteredTitle, setFormTitle] = useState('');
    const [enteredAmount, setFormAmount] = useState('');
    const [enteredDate, setFormDate] = useState('');
    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // });

    const titleHandler = event => {
        setFormTitle(event.target.value);
        // console.log(event.target.value);
        // setUserInput(prevState => ({ ...prevState, enteredTitle: event.target.value }));
    }

    const amountHandler = event => {
        setFormAmount(event.target.value);
        // console.log(event.target.value);
        // setUserInput(prevState => ({ ...prevState, enteredAmount: event.target.value }));
    }

    const dateHandler = event => {
        setFormDate(event.target.value);
        // console.log(event.target.value);
        // setUserInput(prevState => ({ ...prevState, enteredDate: event.target.value }));
    }

    const submitHandler = event => {
        event.preventDefault();
        // console.dir(event);
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(`${enteredDate}T00:00:00`)
        }
        props.onSave(expenseData);
        setFormTitle('');
        setFormAmount('');
        setFormDate('');
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label htmlFor="title">Name</label>
                    <input type="text" name="title" id="title" placeholder="Expense" value={enteredTitle} required onChange={titleHandler} />
                </div>
                <div className="new-expense__control">
                    <label htmlFor="amount">Amount</label>
                    <input type="number" name="amount" id="amount" min="0.01" step="0.01" placeholder="0.01" value={enteredAmount} required onChange={amountHandler} />
                </div>
                <div className="new-expense__control">
                    <label htmlFor="date">Date</label>
                    <input type="date" name="date" id="date" min="2019-01-01" value={enteredDate} required onChange={dateHandler} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button>Submit</button>
            </div>
        </form>
    );

}

export default ExpenseForm;