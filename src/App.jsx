import { useState } from "react";
import useLocalStorage from "./hooks/useLocalStorage";
import SummaryCard from "./components/SummaryCard";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseTable from "./components/ExpenseTable";

export default function App() {
  const [expenses, setExpenses] = useLocalStorage("harcamalar", []);
  const [filter, setFilter] = useState("Tümü");

  const addExpense = (expense) => setExpenses((prev) => [expense, ...prev]);
  const deleteExpense = (id) => setExpenses((prev) => prev.filter((e) => e.id !== id));

  const visible = filter === "Tümü" ? expenses : expenses.filter((e) => e.category === filter);

  return (
    <div className="container">
      <header>
        <h1>💰 Harcama Takip</h1>
        <p className="muted">Harcamalarını kaydet, kategorilere göre takip et.</p>
      </header>

      <SummaryCard expenses={expenses} />

      <main className="layout">
        <ExpenseForm onAdd={addExpense} />
        <ExpenseTable expenses={visible} filter={filter} onFilter={setFilter} onDelete={deleteExpense} />
      </main>
    </div>
  );
}
