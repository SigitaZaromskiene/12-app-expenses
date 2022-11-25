import React from "react";
import styles from "./ExpenseDate.module.css";

const ExpenseDate = (props) => {
  const year = props.date.getFullYear();
  const month = props.date.getMonth();
  const day = props.date.getDate();
  return (
    <div className={styles["expense-date"]}>
      <div className={styles["expense-date__year"]}>{year}</div>
      <div className={styles["expense-date__month"]}>{month}</div>
      <div className={styles["expense-date__day"]}>{day}</div>
    </div>
  );
};

export default ExpenseDate;
