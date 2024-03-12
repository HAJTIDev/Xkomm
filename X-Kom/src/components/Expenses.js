import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./expensesFilter";
import Card from "./Card";
import './Expenses.css';
import { useState } from "react";

function Expenses(props) {
  const [filteredPrice, setfilteredPrice] = useState(100.0);
  const filterChangeHandler = (selectedYear) => {
    setfilteredPrice(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    if (filteredPrice == 'inf') {
      return expense.amount
    } else {
      return expense.amount <= filteredPrice;
    }
  });

  let expensesContent = <p>No expense found.</p>;

  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        opis1={expense.opis1}
        amount={expense.amount}
        img={expense.img}
      />
    ));
  }
  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredPrice}
        onChangeFilter={filterChangeHandler}
      />
      <div className="ItemContainer">
      {expensesContent}
      </div>
    </Card>
  );
}

export default Expenses;

