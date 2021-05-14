import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) => {
  const expenseItems = props.items.map((item) => {
    return (
      <ExpenseItem
        key={item.id}
        title={item.title}
        date={item.date}
        amount={item.amount}
      />
    );
  });
  return <Card className="expenses">{expenseItems}</Card>;
};

export default Expenses;
