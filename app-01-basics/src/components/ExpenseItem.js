import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';

const ExpenseItem = props => {

    const { title = 'Car insurance', amount = 199.99, date = new Date(2021, 2, 28) } = props;

    return (
        <div className="expense-item">
            <ExpenseDate date={date} />
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">$ {amount}</div>
            </div>
        </div>
        // <h2>Expense Item!</h2>
    );
}

export default ExpenseItem;