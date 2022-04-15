import React from 'react'
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css'
import Card from '../UI/Card';

const ExpenseItem = (props) => {
  // console.log("times");
  // const [title, setTitle] = useState(props.title);
//   const ClickHandler = () => {
//     setTitle('Updated')
//     console.log("clicked");
//  }

  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{props.title} </h2>
      </div>
      <div className='expense-item__price'>${props.amount}</div>
      {/* <button onClick={ClickHandler}>Change Title</button> */}
    </Card>
  )
}

export default ExpenseItem;

