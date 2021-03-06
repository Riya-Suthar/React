import React from 'react';
import Expenses from './Expenses';
import DisplayDate from './DisplayDate';
import DisplayPrice from './DisplayPrice';
import '../css/displayExpenses.css';

class DisplayExpenses extends React.Component{
    render(){
        if (this.props.expense.date.getFullYear()==this.props.year){
            return (
                <div className="displayExpenses">
                    {/* date */}
    
                    
                    <div className="date"><DisplayDate date={this.props.expense.date} year={this.props.year}/></div>
                    {/* expense */}
                    <p className="expense"><h3>{this.props.expense.expense}</h3></p>
                    <p className="price">{this.props.expense.price}</p>
                    {/* price */}
                    {/* <div className="price"><DisplayPrice price={this.props.expense.price} /></div> */}
                   
                </div>
               
            )
        }
        else{
           return null;
        }
    }
}

export default DisplayExpenses;