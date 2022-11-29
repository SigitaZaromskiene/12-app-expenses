import React from "react";
import styles from "./NewExpense.module.css";
import NewForm from "./NewForm";

const NewExpense = (props) => {
  const formInputDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddedExpense(expenseData);
  };
  return (
    <div className={styles["new-expense"]}>
      <NewForm onFormInputData={formInputDataHandler} />
    </div>
  );
};

export default NewExpense;
