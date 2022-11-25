import React, { useState } from "react";
import style from "./ExpenseItem.module.css";
import ExpenseDate from "./ExpenseDate";
import Card from "./Card";

const ExpenseItem = (props) => {
  return (
    <Card className={style["expense-item"]}>
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className={style["expense-item__description"]}>
        <h2>{props.title}</h2>
        <div className={style["expense-item__price"]}>{props.amount}</div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
