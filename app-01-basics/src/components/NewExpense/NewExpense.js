import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = props => {

    const getFormData = data => {
        // const expenseData = { ...data, id: Math.random().toString() };
        // console.log('This print came from NewExpense');
        // console.dir(expenseData);
        props.onSave(data);
    }

    return (
        <div className="new-expense">
            <ExpenseForm onSave={getFormData} />
        </div>
    );
}

export default NewExpense;