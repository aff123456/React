import ExpenseItem from "./ExpenseItem";
import './Expenses.css';
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";

const Expenses = props => {

    const expenseItemList = props.expenses.map(expense => {
        return <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />
    });

    const [expensesList, setExpensesList] = useState(expenseItemList);
    
    const filterHandler = data => {
        const filterYear = parseInt(data);
        if (filterYear > 0) {
            const filteredList = expenseItemList.filter(expense => expense.props.date ? expense.props.date.getFullYear() === filterYear : false);
            return setExpensesList(filteredList);
        }
        setExpensesList(expenseItemList);
    }

    return (
        <Card className="expenses">
            <ExpensesFilter onSave={filterHandler} />
            {expensesList}
        </Card>
    );
}

export default Expenses;