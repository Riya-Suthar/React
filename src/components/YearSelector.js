import React from 'react';
import '../css/displayYear.css';
import Year from './Year';

export default function(props){

    const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

    const monthExpenses = months.map((month) => {
        return (
            <Year month={month}/>
        )
    })

    let change = (event)=>{
        console.log("in year selector.js file");
        console.log(event.target.value);
        props.selectYear(event.target.value);
    }

    return(
        <div className="year">
            <div className="selector">
                <h2>Select Year</h2>
                <select onChange={change}>
                    <option value="2019">2019</option>
                    <option value="2020">2020</option>
                    <option value="2021"> 2021</option>
                </select>
            </div>
           <div className="month">{monthExpenses}</div>
        </div>
    )
        
    
}