import React from "react";
import styles from "./NewExpense.module.css";
import NewForm from "./NewForm";

const NewExpense = (props) => {
  return (
    <div className={styles["new-expense"]}>
      <NewForm />
    </div>
  );
};

export default NewExpense;
