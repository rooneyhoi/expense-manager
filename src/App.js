import './App.css';

import { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const INIT_EXPENSE = [
  { id: 'e1', title: 'Toilet Paper', amount: 94.12, date: new Date(2020, 7, 14)},
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  { id: 'e3', title: 'Car Insurance', amount: 294.67, date: new Date(2021, 2, 28)},
  { id: 'e4', title: 'New Desk (Wooden)', amount: 450, date: new Date(2021, 5, 12)}
];

const App = () => {
  const [expenses, setExpense] = useState(INIT_EXPENSE);

  // Define a function to handler the data passing from the child component
  const addExpenseHandler = expense => {
    setExpense(prevExpenses => {
      return [expense, ...prevExpenses];
    });    
  }

  return (
    <div className="App">
      <header className="App-header">     
         {/* Call the child component with props, and passing a function as parameter to get the databack */}
        <NewExpense onAddExpense = {addExpenseHandler}/>
        <div><Expenses expenses={expenses}/></div>        
      </header>
    </div>
  );
}

export default App;
