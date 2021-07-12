import DisplayExpenses from "./DisplayExpenses";

export default function Expense(props){

    const YearSelector = props.selectYear
    const expenses = props.expense.map((exp) => {
        return (
            <DisplayExpenses expense={exp} year={props.year}/>
        )
    })
    return (
        <div>
            {expenses}
        </div>
    )

}