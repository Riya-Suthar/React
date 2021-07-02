import React, { useState } from 'react';
import '../css/form.css';

export default function ExpenseForm() {



    const [addedExpense, expenseUpdated] = useState('');
    const [addedDate, dateUpdated] = useState('');
    const [addedAmount, amountUpdated] = useState('');

    const [userExpense, userExpenseUpdated] = useState({
        expense: '',
        date: '',
        amount: ''
    });

    const addExpense = (event) => {
        event.preventDefault();
        console.log("form submitted");
        userExpenseUpdated((prevState) => {
            return (
                {
                    ...prevState,
                    expense: addedExpense,
                    date: addedDate,
                    amount: addedAmount
                }
            )
        });
        console.log(addedExpense);
        console.log(addedDate);
        console.log(userExpense);
    }

    const expenseTitleChanger = (event) => {
        expenseUpdated(event.target.value);
        userExpenseUpdated((prevState) => {
            return (
                {
                    ...prevState,
                    expense: event.target.value
                }
            )
        });
        console.log(event.target.value);

    }

    const expenseDateChanger = (event) => {
        dateUpdated(event.target.value);
        userExpenseUpdated((prevState) => {
            return (
                {
                    ...prevState,
                    date: event.target.value
                }
            )
        });
    }

    const expenseAmountChanger = (event) => {
        amountUpdated(event.target.value);
        userExpenseUpdated((prevState) => {
            return (
                {
                    ...prevState,
                    amount: event.target.value
                }
            )
        });
    }
    return (
        <form className="expenseAdd" onSubmit={addExpense}>
            <div className="expenseForm">
                <div className="expenseElement">
                    <label>What is the Expense for?</label>
                    <input type="text" className="expenseInput" onChange={expenseTitleChanger} />
                </div>

                <div className="expenseElement">
                    <label>On What Date ?</label>
                    <input type="date" min="2019-01-01" max="2022-01-01" className="expenseInput" onChange={expenseDateChanger} />
                </div>

                <div className="expenseElement">
                    <label>How Much ?</label>
                    <input type="number" min="0.01" step="0.01" className="expenseInput" onChange={expenseAmountChanger} />
                </div>

            </div>
            <div className="expenseButton">
                <button type="submit">Add Expense</button>
            </div>

        </form>
    )

}