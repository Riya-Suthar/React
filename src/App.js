import logo from './logo.svg';
import './App.css';
import Expenses from './components/Expenses';
import DisplayExpenses from './components/DisplayExpenses';
import Expense from './components/Expense';
import ExpenseForm from './components/ExpenseForm';


function App() {
  const expenses = Expenses.map((expense) => {
    return (<DisplayExpenses expense={expense} />)
  })

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
    id: 3,
    expense: 'Groceries',
    price: '2000',
    date: new Date(2021, 6, 28)
},
{
  id: 3,
  expense: 'Groceries',
  price: '2000',
  date: new Date(2021, 6, 28)
}
  ]


  return (
    <div className="homePage">
      <div className="fixed"><ExpenseForm /></div>
      
      {/* <div>
      {expenses}
      </div> */}
      <Expense expense={expenseData}/>
    </div>

  );
}

export default App;
