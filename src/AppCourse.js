import React, { useState } from 'react';
import Expenses from './component/NewExpense/Expenses.js';
import NewExpense from './component/NewExpense/NewExpense';

AppCourse.propTypes = {};
const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2021, 7, 13),
  },
  {
    id: 'e2',

    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 7, 13),
  },
  {
    id: 'e3',

    title: 'New Desk (Wooden)',
    amount: 450.67,
    date: new Date(2021, 7, 13),
  },
];
function AppCourse(props) {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default AppCourse;
