import React from "react";
import "./ExpensesFilter.css";

let currentYear = new Date().getFullYear();
let startYear = 2019;
let yearArray = [2019];
while (startYear < currentYear) {
  startYear++;
  yearArray = [...yearArray, startYear];
}

const ExpensesFilter = ({ onChangeFilter, selected }) => {
  const dropdownChangeHandler = (event) => {
    onChangeFilter(event.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={selected} onChange={dropdownChangeHandler}>
          {yearArray.map((option) => (
            <option value={option.toString()} key={option}>
              {option.toString()}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
