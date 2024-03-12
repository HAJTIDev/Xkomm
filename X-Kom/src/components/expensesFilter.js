import { useState } from "react";
import "./ExpensesFilter.css";
const ExpesesFilter = (props) => {
  const priceChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
    setPrice(event.target.value);
  };

  const [price, setPrice] = useState(0);
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by Price</label>
        <div className="priceSelect">
          <div className="price">{price}zł</div>
          <input
            type="range"
            max={5000}
            min={0}
            step={250}
            name="price"
            value={price}
            onChange={priceChangeHandler}
          />
        </div>
      </div>
    </div>
  );
};
export default ExpesesFilter;
