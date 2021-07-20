import React, { useState } from 'react';
import './ExpenseForm.css';

function ExpenseForm(props) {
  const { onSaveExpenseData } = props;
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmout, setEnteredAmout] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  //   const [userInput, setUserInput] = useState({
  //     enteredTitle: '',
  //     enteredAmout: '',
  //     enteredDate: '',
  //   });

  const titleChangeHandler = (e) => {
    setEnteredTitle(e.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: e.target.value,
    // });
  };

  const amountChangeHandler = (e) => {
    setEnteredAmout(e.target.value);

    // setUserInput({
    //   ...userInput,
    //   enteredAmout: e.target.value,
    // });
  };

  const dateChangeHandler = (e) => {
    setEnteredDate(e.target.value);

    // setUserInput({
    //   ...userInput,
    //   enteredDate: e.target.value,
    // });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmout,
      date: new Date(enteredDate),
    };

    setEnteredTitle('');
    setEnteredAmout('');
    setEnteredDate('');

    // console.log(expenseData);
    if (onSaveExpenseData) {
      onSaveExpenseData(expenseData);
    } else {
      return;
    }
  };
  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input
            type='text'
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input
            type='number'
            min='0.01'
            step='0.01'
            value={enteredAmout}
            onChange={amountChangeHandler}
          />
        </div>
        <div className='new-expense__control'>
          <label>date</label>
          <input
            type='date'
            min='2019-01-01'
            max='2022-12-31'
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
