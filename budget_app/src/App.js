import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import PopUpAlert from "./components/PopUpAlert";
import Result from "./components/Result";
import { v4 as uuidv4 } from "uuid";
const iniitialExpenses = [
  {
    id: uuidv4(),
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: uuidv4(),
    title: "New TV",
    amount: 799.49,
    date: new Date(2021, 2, 12),
  },
  {
    id: uuidv4(),
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: uuidv4(),
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];
console.log(iniitialExpenses);
function App() {
  const [expenses, setExpenses] = useState(iniitialExpenses);
  return (
    <div className="App">
      <PopUpAlert />
      <Form />
      <Result />
    </div>
  );
}

export default App;
