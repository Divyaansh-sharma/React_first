import React, { useState } from 'react'
import './Expenses.css'
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
import ExpensesList from './ExpensesList';

const Expenses = (props) => {

  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = selectedYear => {
    console.log('Expenses.js');
    setFilteredYear(selectedYear);
  }

  const filteredExpenses = props.expenses.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className='expenses'>
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
      <ExpensesList expenses={filteredExpenses}/>
      </Card>
    </div>
  )
}

export default Expenses
