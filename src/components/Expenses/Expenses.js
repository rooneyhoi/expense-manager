import { useState } from "react";

import Card from '../UI/Card';
import ExpenseList from "./ExpensesList";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";
import './Expenses.css';

function Expenses (props){
  const [filteredYear, setFilteredYear] = useState('2021');

  const onChangeFilter = (selectedValue) => {
    setFilteredYear(selectedValue);
    console.log(selectedValue);
  }

  const filteredExpenses = props.expenses.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onChangeFilter={onChangeFilter}/> 
        <ExpensesChart expenses={filteredExpenses} />       
        <ExpenseList expenses={filteredExpenses} />      
      </Card>
    </div>
  );
}

export default Expenses;