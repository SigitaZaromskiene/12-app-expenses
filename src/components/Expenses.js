import React from "react";
import ExpenseItem from "./ExpenseItem";
import styles from "./Expenses.module.css";

const Expenses = (props) => {
  return (
    <div className={styles.expenses}>
      <ExpenseItem
        title={props.allExpenses[0].title}
        amount={props.allExpenses[0].amount}
        date={props.allExpenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.allExpenses[1].title}
        amount={props.allExpenses[1].amount}
        date={props.allExpenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.allExpenses[2].title}
        amount={props.allExpenses[2].amount}
        date={props.allExpenses[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.allExpenses[3].title}
        amount={props.allExpenses[3].amount}
        date={props.allExpenses[3].date}
      ></ExpenseItem>
    </div>
  );
};

export default Expenses;
