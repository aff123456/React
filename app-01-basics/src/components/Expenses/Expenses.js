import ExpenseItem from "./ExpenseItem";
import './Expenses.css';
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";
import { useState } from "react";

const Expenses = props => {

    const getUpdatedData = data => {
        // console.log('expensesList before');
        // console.dir(expensesList);
        // console.log('data');
        // console.dir(data);
        console.log(props.expenses);
        for (let [index, expense] of props.expenses.entries()) {
            if (expense.id === data.id) {
                props.expenses.splice(index, 1, data);
            }
        }
        // for (let [index, expense] of expensesList.entries()) {
        //     if (expense.key === data.id) {
        //         const newElement = <ExpenseItem key={data.id} id={data.id} title={data.title} amount={data.amount} date={data.date} onSave={getUpdatedData} />;
        //         expensesList.splice(index, 1, newElement);
        //     }
        // }
        props.onSave(props.expenses);
        // console.log('expensesList after');
        // console.dir(expensesList);
    }

    const expenseItemList = props.expenses.map(expense => {
        return <ExpenseItem key={expense.id} id={expense.id} title={expense.title} amount={expense.amount} date={expense.date} onSave={getUpdatedData} />
    });

    const [expensesList, setExpensesList] = useState(expenseItemList);

    const filterHandler = data => {
        const filterYear = parseInt(data);
        if (filterYear > 0) {
            const filteredList = expenseItemList.filter(expense => expense.props.date ? expense.props.date.getFullYear() === filterYear : false);
            return setExpensesList(filteredList);
        } else {
            // resetFilter = false;
        }
        setExpensesList(expenseItemList);
    }

    const defaultText = <p>No expenses found!</p>;

    return (
        <Card className="expenses">
            <ExpensesFilter onSave={filterHandler} />
            <ExpensesChart expenses={expensesList} />
            {expensesList.length ? expensesList : defaultText}
            {/* {expensesList} */}
        </Card>
    );
}

export default Expenses;