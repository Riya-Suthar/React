import DisplayExpenses from "./DisplayExpenses";

export default function Expense(props){

    const expenses = props.expense.map((exp) => {
        return (
            <DisplayExpenses expense={exp}/>
        )
    })
    return (
        <div>
            {expenses}
        </div>
    )

}