import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
import { useState } from 'react';

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };

    props.onAddExpense(expenseData);
    setIsEditing(false);
  }

  const startEditingHandler = (event) => {
    event.preventDefault();
    setIsEditing(true);
  }

  const stopEditingHandler = () => {    
    setIsEditing(false);
  }

  return <div className="new-expense">    
    {!isEditing && <button onClick={startEditingHandler}>Add New Expenses</button>}
    {isEditing && <ExpenseForm 
      onSaveExpenseData={saveExpenseDataHandler}
      onCancelEditing={stopEditingHandler}
    />}
  </div>
}

export default NewExpense;