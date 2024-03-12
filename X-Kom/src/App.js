import Expenses from "./components/Expenses";
import ExpenseForm from "./components/ExpenseForm";
import { useState } from "react";
const Przykladowe = [
  {
    id: 'e1',
    title: 'Huion H950P',
    amount: 249,
    img: '/images/e1.webp',
    opis1: "Typ:Tablet graficzny n\ Obszar roboczy:221 x 138 mm n\ Rozdzielczość:5080 lpi n\ Poziomy nacisku:8192",
  },
  {
    id: 'e2',
    title: 'Wacom Intuos Pro M',
    amount: 1349,
    img: '/images/e2.webp',
    opis1: "Typ:Tablet graficzny n\ Obszar roboczy:224 x 148 mm n\ Rozdzielczość:5080 lpi n\ Poziomy nacisku:8192 ",
  },
  {
    id: 'e3',
    title: 'XP-Pen Star G430S',
    amount: 99,
    img: '/images/e3.webp',
    opis1: "Typ:Tablet graficzny n\ Obszar roboczy:101 x 76 mm n\ Rozdzielczość:5080 lpi n\ Poziomy nacisku:8192",
  },
  {
    id: 'e4',
    title: 'XP-Pen Deco Fun L Classic Black',
    amount: 219,
    img: '/images/e4.webp',
    opis1: "Typ:Tablet graficzny n\ Obszar roboczy:254 x 159 mm n\ Rozdzielczość:5080 lpi n\ Poziomy nacisku:8192",
  },
  {
    id: 'e5',
    title: 'Huion Kamvas 13',
    amount: 419,
    img: '/images/e5.webp',
    opis1: "Typ:Tablet graficzny LCD n\  Rozdzielczość:1920 x 1080 n\ Poziomy nacisku:8192 n\ Interfejs:USB-C",
  },
  {
    id: 'e6',
    title: 'Huion Kamvas Pro 13 2.5K',
    amount: 1869,
    img: '/images/e6.jpg',
    opis1: "Typ:Tablet graficzny LCD n\ Obszar roboczy:286.5 x 179 mm n\ Rozdzielczość:5080 lpi n\ Poziomy nacisku:8192",
  },
];



function App() {
  const [expenses, setExpenses] = useState(Przykladowe);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <>
      <ExpenseForm onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses}/>
    </>
  );
}

export default App;
