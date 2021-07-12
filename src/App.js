import logo from './logo.svg';
import './App.css';
import Expenses from './components/Expenses';
import DisplayExpenses from './components/DisplayExpenses';
import Expense from './components/Expense';
import ExpenseForm from './components/ExpenseForm';
import YearSelector from './components/YearSelector';
import { useState } from 'react';

function App() {
  const expenses = Expenses.map((expense) => {
    return (<DisplayExpenses expense={expense} />)
  })

  const [selectedYear, updateYear] = useState('2019');

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
},
{
  id: 5,
  expense: 'rent',
  price: '5000',
  date: new Date(2019, 6, 26)
}
  ]


  return (
    <div className="homePage">
      <div className="fixed"><ExpenseForm /></div>
      
      {/* <div>
      {expenses}
      </div> */}
      <div>
      <YearSelector selectYear={yearUpdater}/>
      <Expense expense={expenseData} year={selectedYear}/>
      </div>
    </div>

  );
}

export default App;
