import React, { useState } from 'react';
import ExpenseItem from '../Course/ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  return (
    <Card className='expenses'>
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangHandler}
      ></ExpensesFilter>
      {props.items.length === 0 ? (
        <p>No expenses found.</p>
      ) : (
        props.items.map((item) => (
          <ExpenseItem
            key={item.id}
            title={item.title}
            amount={item.amount}
            date={item.date}
          ></ExpenseItem>
        ))
      )}
    </Card>
  );
}

export default Expenses;
