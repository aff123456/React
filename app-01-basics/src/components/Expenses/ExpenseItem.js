import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

const ExpenseItem = props => {

    const { title = 'Car insurance', amount = 199.99, date = new Date(2021, 2, 28) } = props;

    return (
        <Card className="expense-item">
            <ExpenseDate date={date} />
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">$ {amount}</div>
            </div>
        </Card>
    );
}

export default ExpenseItem;