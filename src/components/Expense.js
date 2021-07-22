import DisplayExpenses from "./DisplayExpenses";
import '../css/displayExpenses.css';

export default function Expense(props){

    const YearSelector = props.selectYear
    const expenses = props.expense.map((exp) => {
        return (
            <DisplayExpenses expense={exp} year={props.year}/>
        )
    });
    console.log("In expense.js line no 11");
    console.log(expenses.length);
    const expenseFiltered =  props.expense.filter((exp) => {
        return (exp.date.getFullYear()==props.year)
    });
    console.log(expenseFiltered);
    if(expenseFiltered.length!=0){
        return (
            <div>
                {expenses}
            </div>
        )
    }
    else{
        console.log("No expenses in the year");
        return (
            <div className="displayExpenses">No Expenses for Selected Year!</div>
        )
    }
    

}