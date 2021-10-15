import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

import { useState, useEffect, useRef } from 'react';

const ExpenseItem = props => {

    const useIsMount = () => {
        const isMountRef = useRef(true);
        useEffect(() => {
            isMountRef.current = false;
        }, []);
        return isMountRef.current;
    };

    const [title = 'Car Insurance', setTitle] = useState(props.title);
    const [amount = 199.99, setAmount] = useState(props.amount);
    // const [amount = 199.99, setAmount] = useState(props.amount);
    // const [date = new Date(2021, 2, 28), setDate] = useState(props.date);
    // const [prop, setProp] = useState(props);
    const [focused, setFocused] = useState(false);

    const stopFormSubmission = event => {
        event.preventDefault();
        const tmp = document.createElement("input");
        document.body.prepend(tmp);
        tmp.focus();
        document.body.removeChild(tmp);
    }

    const titleHandler = event => {
        event.target.value.length > 0 ? setTitle(event.target.value) : setTitle(title);
        setFocused(false);
        // console.log(event.target.value);
        // setUserInput(prevState => ({ ...prevState, enteredTitle: event.target.value }));
    }

    const amountHandler = event => {
        const enteredAmount = parseFloat(event.target.value);
        enteredAmount > 0 ? setAmount(enteredAmount) : setAmount(amount);
        setFocused(false);
    }

    const isMount = useIsMount();

    useEffect(() => {
        if (!focused && !isMount) {
            props.onSave({
                id: props.id, 
                title: title,
                amount: amount,
                date: date
            });
        }
    })

    const { date = new Date() } = props;
    // const { amount = 199.99, date = new Date() } = props;
    // const { title = 'Car Insurance', amount = 199.99, date = new Date(2021, 2, 28) } = props;
    // const { title = 'Car Insurance', amount = 199.99, date = new Date(2021, 2, 28) } = prop;

    const editTitleHandler = () => {
        if (!focused) {
            setFocused(true);
            // focused = true;
            setTitle(
                <form onBlur={titleHandler} onSubmit={stopFormSubmission} >
                    <div className="new-expense__control">
                        <input type="text" placeholder={title} autoFocus />
                    </div>
                </form>
            );
        }
    };

    const editAmountHandler = () => {
        if (!focused) {
            setFocused(true);
            // focused = true;
            setAmount(
                <form onBlur={amountHandler} onSubmit={stopFormSubmission} >
                    <div className="new-expense__control">
                        <input type="number" min="0.01" step="0.01" placeholder={amount} autoFocus />
                    </div>
                </form>
            );
        }
    }
    // const editTitleHandler = () => setTitle('Updated!');
    // const editTitleHandler = () => console.log('Updated!');

    return (
        <Card className="expense-item">
            <ExpenseDate date={date} />
            <div className="expense-item__description">
                <h2 onClick={editTitleHandler}>{title}</h2>
                <div className="expense-item__price" onClick={editAmountHandler}>$ {amount}</div>
            </div>
        </Card>
    );
}

export default ExpenseItem;