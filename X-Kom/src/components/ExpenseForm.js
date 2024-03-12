import React, { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredOpis, setEnteredOpis] = useState("");
  const [enteredImg, setEnteredImg] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };
  const opisChangeHandler = (event) => {
    setEnteredOpis(event.target.value);
  };
  const imgChangeHandler = (event) => {
    setEnteredImg(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      opis1: enteredOpis,
      img: enteredImg,
    };
    props.onAddExpense(expenseData);
    setEnteredImg("");
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredOpis("");
  };
  return (
    <form onSubmit={submitHandler} className="formContainer">
      <div className="new-expense_controls">
        <div className="expenseContainer">
          <div className="new-expense_control">
            <input
              type="text"
              value={enteredTitle}
              onChange={titleChangeHandler}
              placeholder="Tytul"
            />
          </div>
          <div className="new-expense_control">
            <input
              type="text"
              value={enteredAmount}
              onChange={amountChangeHandler}
              placeholder="Cena"
            />
          </div>
        </div>
        <div className="expenseContainer">
          <div className="new-expense_control">
            <input
              type="text"
              value={enteredOpis}
              onChange={opisChangeHandler}
              placeholder="Opis"
            />
          </div>
          <div className="new-expense_control">
            <input
              type="text"
              value={enteredImg}
              onChange={imgChangeHandler}
              placeholder="Zdjecie (Link do png)"
            />
          </div>
        </div>
      </div>
      <div className="new-expense_actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
