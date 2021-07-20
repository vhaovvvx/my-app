import React, { useState } from 'react';
import ExpenseDate from '../NewExpense/ExpenseDate';
import './Expenseltem.css';

ExpenseItem.propTypes = {};

function ExpenseItem(props) {
  const { date, title, amount } = props;

  const [titleContent, setTitleContent] = useState(title);

  const clickHandler = () => {
    setTitleContent('Updated!');
  };

  return (
    <div className='expense-item'>
      <ExpenseDate date={date}></ExpenseDate>
      <div className='expense-item__description'>
        <h2>{titleContent}</h2>
        <div className='expense-item__price'>${amount}</div>
      </div>
      <button onClick={clickHandler}>change title</button>
    </div>
  );
}

export default ExpenseItem;
