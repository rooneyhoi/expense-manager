import { useState } from 'react';

import './ExpenseForm.css'

const ExpenseForm = (props) => {

  // It's possible to use multiple 'State' pieces in the same component, and each piece of 'State' is separated
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  /*
  //It's ALSO possible to use 01 'State' for everything in a component by using an Object in State
  const [userInput, setUserInput] = useState({
    enteredTitle: '',
    enteredAmount: '',
    enteredDate: ''
  });

  const titleChangeHandler = (event) => {    
    setUserInput((prevState) => {
      return { ...prevState, enteredTitle: event.target.value };
    });
  }
  */

  const titleChangeHandler = (event) => {    
    setEnteredTitle(event.target.value);
    console.log(enteredTitle);
  }

  const amountChangeHandler = (event) => {    
    setEnteredAmount(event.target.value);
    console.log(enteredAmount);
  }

  const dateChangeHandler = (event) => {    
    setEnteredDate(event.target.value);
    console.log(enteredDate);
  }

  const subtmitHandler = (event) => {
    // preventDefault is vanilla JS and it prevents the browser to reload
    event.preventDefault();

    // Create new object / or return an object whenever submit the form, with the date getting from State values
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount, // force the number type
      date: new Date(enteredDate)
    }

    // Call the props function which is defiend in Parent component, and pass the form submit data
    // The function 'onSaveExpenseData' is defined in the NewExpense.js, which is the parent component
    props.onSaveExpenseData(expenseData);
    
    // Two-way binding: Reset the State's values
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  }

  return (
    // Best practice: When using form element, put the submit event handler at the form tag instead of submit button
    <form onSubmit={subtmitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          {/* Two-way binding: Binding the state's value to the value attribute of the form element */}
          <input type='text' value={enteredTitle} onChange={titleChangeHandler} />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input type='number' value={enteredAmount} min='0.01' step='0.01' onChange={amountChangeHandler}/>
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input type='date' value={enteredDate} min='2019-01-01' max='2022-12-31' onChange={dateChangeHandler}/>
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='button' onClick={props.onCancelEditing}>Cancel</button>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;