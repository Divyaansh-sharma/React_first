import './Card.css'

function Card(props)  {
    const classes ="card " + props.className; //here we use whitespace after card note it
  return  <div className={classes}>{props.children} </div>
  
}
export default Card;
