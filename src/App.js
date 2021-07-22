import logo from './logo.svg';
import './App.css';
import Expenses from './components/Expenses';
import DisplayExpenses from './components/DisplayExpenses';
import Expense from './components/Expense';
import ExpenseForm from './components/ExpenseForm';
import YearSelector from './components/YearSelector';
import { useState } from 'react';
import './css/form.css';

function App() {
  const expenses = Expenses.map((expense) => {
    return (<DisplayExpenses expense={expense} />)
  })

  const [selectedYear, updateYear] = useState('2019');
  const [showForm, displayForm] = useState(false);

  const yearUpdater = (value) => {
      console.log("in app.js year updater function");
      console.log(value);
      updateYear(value);
  }

  
  const expenseData = [
    {
      id: 1,
      expense: 'Food',
      price: '500',
      date: new Date(2021, 6, 26)
  },
  {
      id: 2,
      expense: 'Petrol',
      price: '1000',
      date: new Date(2021, 6, 27)
  },
  {
      id: 3,
      expense: 'Groceries',
      price: '2000',
      date: new Date(2021, 6, 28)
  },
  {
    id: 4,
    expense: 'Food',
    price: '1500',
    date: new Date(2020, 6, 26)
}
  ]

  const [newExpenseData, expenseUpdater] = useState(expenseData);
  let id = expenseData.length;
  const addExpense = (expense)=>{
    id += 1;
    const newexpense = {id: id, ...expense};
    console.log(newexpense);
    expenseUpdater((prevState)=> {
      return ([
        ...prevState,
        newexpense
      ])
    })
  }

  const formDisplayer = () => {
    displayForm(true);
  }

  const stopEditing = () => {
    displayForm(false);
  }

  return (
    <div className="homePage">
      <div className="fixed">
  
        {!showForm && <div className="displayForm"><button onClick={formDisplayer}>Display Form</button></div>}
        {showForm && <ExpenseForm expenses={expenseData} expenseUpdate={addExpense} onCancel={stopEditing}/>}
        
      </div>
      
      
      {/* <div>
      {expenses}
      </div> */}
      <div>
      <YearSelector selectYear={yearUpdater}/>
      <Expense expense={newExpenseData} year={selectedYear}/>
      </div>
    </div>

  );
}

export default App;
