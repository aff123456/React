// import logo from './logo.svg';
// import React from 'react';
// import ExpenseItem from './components/ExpenseItem';
import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import { useState } from 'react';

const DUMMY_EXPENSES = [
    {
        id: 'e1',
        title: 'Toilet Paper',
        amount: 94.12,
        date: new Date(2020, 7, 14),
    },
    {
        id: 'e2',
        title: 'New TV',
        amount: 799.49,
        date: new Date(2021, 2, 12)
    },
    {
        id: 'e3',
        title: 'Car Insurance',
        amount: 294.67,
        date: new Date(2021, 2, 28),
    },
    {
        id: 'e4',
        title: 'New Desk (Wooden)',
        amount: 450,
        date: new Date(2021, 5, 12),
    },
    {
        id: 'e5',
        title: 'teste',
        amount: 199.99,
        date: new Date(2021, 3, 28),
    },
];

const App = () => {

    const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

    const newExpenseHandler = data => {
        const expenseData = { id: Math.random().toString(), ...data };
        if (parseFloat(expenseData.amount)) expenseData.amount = parseFloat(expenseData.amount);
        // console.log('This print came from App.js');
        console.dir(expenseData);
        console.dir(expenses);
        // setExpenses([expenseData, ...expenses]);
        setExpenses(prevExpenses => [expenseData, ...prevExpenses]);
    }

    // return React.createElement(
    //     'div',
    //     {},
    //     React.createElement(
    //         'h1',
    //         {},
    //         'Expenses'
    //     ),
    //     React.createElement(
    //         Expenses,
    //         { expenses: expenses }
    //     )
    // );

    return (
        <div>
            {/* <h1>Expenses</h1> */}
            <NewExpense onSave={newExpenseHandler} />
            <Expenses expenses={expenses} />
        </div>
    );
}

export default App;