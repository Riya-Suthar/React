import React, { useState } from 'react';
import '../css/form.css';

export default function ExpenseForm(props) {

    const initialState = props.expenses;
    const [addedExpense, expenseUpdated] = useState('');
    const [addedDate, dateUpdated] = useState('');
    const [addedAmount, amountUpdated] = useState('');
    let addExpensePressed = 0;
    const [userExpense, userExpenseUpdated] = useState(initialState);

    const addExpense = (event) => {
        event.preventDefault();
        console.log("form submitted");
        const newExpense = {
            expense: addedExpense,
            date: addedDate,
            price: addedAmount
        }
        props.expenseUpdate(newExpense);
        // alert("Added Expense");
        document.getElementById("expense-form").reset();

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
        // console.log(event.target.value);
        const d = new Date(event.target.value);
        dateUpdated(d);
        console.log(d);
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

   const cancelExpense = () => {
       props.onCancel();
   }


    return (
        
        <form className="expenseAdd" onSubmit={addExpense} id="expense-form">
            <div className="expenseForm" id="expense-form-fields" >
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
                <button type="button" onClick={cancelExpense}>Cancel</button>
                <button type="submit">Add Expense</button>
            </div>
            {/* <div className="expenseButton">
                <button type="submit" onClick={cancelExpense}>Cancel</button>
            </div> */}
            

        </form>
        
        
    )

}