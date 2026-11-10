import { useState } from "react";
import { CATEGORIES } from "../data/categories";

const today = () => new Date().toISOString().slice(0, 10);

export default function ExpenseForm({ onAdd }) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState(CATEGORIES[0].name);
  const [date, setDate] = useState(today());
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = parseFloat(amount.replace(",", "."));

    if (!title.trim()) return setError("Lütfen bir açıklama yazın.");
    if (!value || value <= 0) return setError("Tutar 0'dan büyük bir sayı olmalı.");

    onAdd({ id: crypto.randomUUID(), title: title.trim(), amount: value, category, date });
    setTitle("");
    setAmount("");
    setError("");
  };

  return (
    <form className="card form" onSubmit={handleSubmit}>
      <h2>Harcama Ekle</h2>
      <label>
        Açıklama
        <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Örn. Haftalık market" />
      </label>
      <div className="row">
        <label>
          Tutar (₺)
          <input value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="0,00" inputMode="decimal" />
        </label>
        <label>
          Tarih
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
        </label>
      </div>
      <label>
        Kategori
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          {CATEGORIES.map((c) => (
            <option key={c.name}>{c.name}</option>
          ))}
        </select>
      </label>
      {error && <p className="error">{error}</p>}
      <button type="submit" className="primary">Ekle</button>
    </form>
  );
}
