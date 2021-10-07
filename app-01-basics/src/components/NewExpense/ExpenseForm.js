import './ExpenseForm.css';

const ExpenseForm = () => {

    return (
        <form>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label for="title">Name</label>
                    <input type="text" name="title" id="title" placeholder="Expense" />
                </div>
                <div className="new-expense__control">
                    <label for="amount">Amount</label>
                    <input type="number" name="amount" id="amount" min="0.01" step="0.01" placeholder="0.01" />
                </div>
                <div className="new-expense__control">
                    <label for="date">Date</label>
                    <input type="date" name="date" id="date" min="2019-01-01" />
                </div>
            </div>
            <div className="new-expense__actions">
                <button>Submit</button>
            </div>
        </form>
    );

}

export default ExpenseForm;