import { CATEGORIES, colorOf, formatTL } from "../data/categories";

export default function SummaryCard({ expenses }) {
  const total = expenses.reduce((sum, e) => sum + e.amount, 0);

  // Kategori bazında toplamlar
  const byCategory = CATEGORIES.map((c) => ({
    name: c.name,
    total: expenses.filter((e) => e.category === c.name).reduce((s, e) => s + e.amount, 0),
  })).filter((c) => c.total > 0);

  return (
    <section className="card summary">
      <p className="label">Toplam Harcama</p>
      <p className="total">{formatTL(total)}</p>
      <p className="muted">{expenses.length} kayıt</p>
      {byCategory.length > 0 && (
        <ul className="breakdown">
          {byCategory.map((c) => (
            <li key={c.name}>
              <span className="dot" style={{ background: colorOf(c.name) }} />
              {c.name}: <strong>{formatTL(c.total)}</strong>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
