import "./ExpenseItem.css";
import Card from "./Card";

function ExpenseItem(props) {
  return (
    <Card className="expense-item">
      <img src={props.img ?? '/images/e5.webp'} alt="Brak Obrazu" className='itemImg'></img>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <h4 className="opis">{props.opis1.split('\n').map(str => <p>{str}</p>)}</h4>
        <div className="expense-item__price"><h2>{props.amount}zł</h2></div>
      </div>
    </Card>
  );
}
export default ExpenseItem;
