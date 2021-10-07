import ExpenseItem from "./ExpenseItem";
import './Expenses.css';
import Card from "../UI/Card";

const Expenses = props => {

    const expenseItemList = props.expenses.map(expense => {
        return <ExpenseItem title={expense.title} amount={expense.amount} date={expense.date} />
    });

    return (
        <Card className="expenses">
            {expenseItemList}
        </Card>
    );
}

export default Expenses;