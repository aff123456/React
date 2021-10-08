import ExpenseItem from "./ExpenseItem";
import './Expenses.css';
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";

const Expenses = props => {

    const expenseItemList = props.expenses.map((expense, index) => {
        return <ExpenseItem key={index} title={expense.title} amount={expense.amount} date={expense.date} />
    });

    const [filterValue, setFilterValue] = useState('');

    const filterHandler = data => {
        // const filterYear = { data, id: Math.random().toString() };  // not sure if 'id' is needed, since 'data' is not an object
        const filterYear = data;
        console.log('Expenses component');
        console.log(filterYear);
        setFilterValue(filterYear);
    }

    return (
        <Card className="expenses">
            <ExpensesFilter onSave={filterHandler} />
            {expenseItemList}
        </Card>
    );
}

export default Expenses;