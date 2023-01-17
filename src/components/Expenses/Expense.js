import React, { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../Card/Card';
import ExpensesFilter from './ExpenseFilter';
import './Expense.css';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
        {props.items.map((expense)=>(
          <ExpenseItem key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}/>
        ))}
      </Card>
    </div>
  );
};

export default Expenses;