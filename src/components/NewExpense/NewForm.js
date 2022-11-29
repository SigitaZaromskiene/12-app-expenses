import React, { useState } from "react";
import styles from "./NewForm.module.css";

const NewForm = (props) => {
  const [enteredTitle, setUpdatedTitle] = useState("");
  const [enteredAmount, setUpdatedAmount] = useState("");
  const [enteredDate, setUpdatedDate] = useState("");

  const newDateHandler = (e) => {
    setUpdatedDate(e.target.value);
  };
  const newAmountHandler = (e) => {
    setUpdatedAmount(e.target.value);
  };
  const newTitleHandler = (e) => {
    setUpdatedTitle(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    props.onFormInputData(expenseData);
    setUpdatedTitle("");
    setUpdatedAmount("");
    setUpdatedDate("");
  };
  return (
    <form onSubmit={submitHandler}>
      <div className={styles["new-expense__controls"]}>
        <div className={styles["new-expense__control"]}>
          <label>Title</label>
          <input type="text" value={enteredTitle} onChange={newTitleHandler} />
        </div>
        <div className={styles["new-expense__control"]}>
          <label>Amount</label>
          <input
            onChange={newAmountHandler}
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
          />
        </div>
        <div className={styles["new-expense__control"]}>
          <label>Date</label>
          <input
            onChange={newDateHandler}
            type="date"
            min="2019-01-01"
            max="2023-12-23"
            value={enteredDate}
          />
        </div>
      </div>
      <div className={styles["new-expense__actions"]}>
        <button type="submit">Add expense</button>
      </div>
    </form>
  );
};

export default NewForm;
