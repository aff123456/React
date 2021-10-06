import ExpenseItem from "./ExpenseItem";
import './Expenses.css';

const Expenses = props => {

    const expenseItemList = props.expenses.map(expense => {
        return <ExpenseItem title={expense.title} amount={expense.amount} date={expense.date} />
    });

    return (
        <div className="expenses">
            {expenseItemList}
        </div>
    );
}

export default Expenses;