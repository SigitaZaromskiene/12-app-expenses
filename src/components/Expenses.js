import React from "react";
import ExpenseItem from "./ExpenseItem";
import styles from "./Expenses.module.css";
import Card from "./Card";

const Expenses = (props) => {
  return (
    <Card className={styles.expenses}>
      {props.allExpenses.map((expenses) => (
        <ExpenseItem
          title={expenses.title}
          amount={expenses.amount}
          date={expenses.date}
          key={expenses.id}
        ></ExpenseItem>
      ))}
    </Card>
  );
};

export default Expenses;
