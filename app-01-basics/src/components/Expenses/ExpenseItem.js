import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

import { useState } from 'react';

const ExpenseItem = props => {

    const [title = 'Car Insurance', setTitle] = useState(props.title);
    // const [amount = 199.99, setAmount] = useState(props.amount);
    // const [date = new Date(2021, 2, 28), setDate] = useState(props.date);
    // const [prop, setProp] = useState(props);

    const { amount = 199.99, date = new Date(2021, 2, 28) } = props;
    // const { title = 'Car Insurance', amount = 199.99, date = new Date(2021, 2, 28) } = props;
    // const { title = 'Car Insurance', amount = 199.99, date = new Date(2021, 2, 28) } = prop;

    const buttonClickHandler = () => console.log('clicked again');
    // const buttonClickHandler = () => setProp({ title: 'Updated!', amount, date});
    const editTitleHandler = () => setTitle('Updated!');
    // const editTitleHandler = () => console.log('Updated!');

    return (
        <Card className="expense-item">
            <ExpenseDate date={date} />
            <div className="expense-item__description">
                <h2 onClick={editTitleHandler}>{title}</h2>
                <div className="expense-item__price">$ {amount}</div>
            </div>
            <button onClick={buttonClickHandler}>Edit</button>
        </Card>
    );
}

export default ExpenseItem;